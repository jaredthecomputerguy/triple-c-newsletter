import { sendWelcomeEmail } from "$lib/emails/sendWelcomeEmail";
import { error, fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
  return {
    hasSubscribed: cookies.get("hs") === "true",
    debugPosition: cookies.get("debug_position") as "top" | "bottom"
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
    const name = "hs";
    const value = "true";
    const cookie = cookies.get(name);
    if (cookie === value) {
      cookies.delete(name, { path: "/" });
    } else {
      cookies.set(name, value, { path: "/" });
    }
  },

  debugPosition: async ({ cookies }) => {
    const name = "debug_position";
    const currentDebugPosition = cookies.get(name);

    if (currentDebugPosition === "top") {
      cookies.set(name, "bottom", { path: "/" });
    } else {
      cookies.set(name, "top", { path: "/" });
    }
  },

  error: async () => {
    throw error(404, { message: "Server side error" });
  }
} satisfies Actions;
