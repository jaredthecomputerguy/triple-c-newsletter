import { sendWelcomeEmail } from "$lib/emails/sendWelcomeEmail";
import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
  return {
    hasSubscribed: cookies.get("hs") === "true"
  };
};

export const actions = {
  submit: async ({ request, fetch, cookies }) => {
    const formData = await request.formData();

    const firstName = (formData.get("given-name") as string) || "";
    const lastName = (formData.get("family-name") as string) || "";
    const email = formData.get("email") as string;
    const terms = formData.has("terms");

    const errors = [];

    if (!terms) {
      errors.push("You must agree to the terms of use.");
    }

    if (!email || typeof email !== "string") {
      errors.push("Please enter a valid email address.");
    }

    const res = await fetch("welcome-email.html");
    if (!res.ok) {
      errors.push("There was an error sending the welcome email.");
    }

    if (errors.length > 0) {
      return fail(400, { errors, success: false });
    }

    const html = await res.text();

    await sendWelcomeEmail({ firstName, lastName, toEmail: email, html });

    cookies.set("hs", "true", {
      path: "/",
      maxAge: 60 * 60 * 24 // one day
    });

    return { success: true, errors: null };
  },
  cookie: async ({ cookies }) => {
    const hasSubscribed = cookies.get("hs") === "true";
    if (!hasSubscribed) {
      return;
    }
    cookies.delete("hs", { path: "/" });
  }
} satisfies Actions;
