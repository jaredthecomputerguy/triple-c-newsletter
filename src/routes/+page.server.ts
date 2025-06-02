import { sendWelcomeEmail } from "$lib/emails/sendWelcomeEmail";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const ssr = false;

export const actions = {
  default: async ({ request, fetch }) => {
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

    return { success: true, errors: null };
  }
} satisfies Actions;
