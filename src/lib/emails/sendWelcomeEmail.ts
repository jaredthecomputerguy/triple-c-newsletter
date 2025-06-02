import { Resend } from "resend";
import { RESEND_API_KEY, RESEND_GENERAL_AUDIENCE_ID, RESEND_FROM_EMAIL, NODE_ENV } from "$env/static/private";
const resend = new Resend(RESEND_API_KEY);

interface SendWelcomeEmailInfo {
  toEmail: string;
  firstName?: string;
  lastName?: string;
  html: string;
}

export const sendWelcomeEmail = async (user: SendWelcomeEmailInfo) => {
  const { toEmail, firstName, lastName, html } = user;

  try {
    if (NODE_ENV === "development") {
      /* eslint-disable no-console */
      console.log("<--DEV MODE-->");
      console.log("\t", {
        toEmail,
        firstName,
        lastName
      });
      console.log("<--END DEV MODE-->");
      return { success: true };
      /* eslint-enable no-console */
    }

    const { data: createContactData, error: createContactError } = await resend.contacts.create({
      email: toEmail,
      firstName,
      lastName,
      audienceId: RESEND_GENERAL_AUDIENCE_ID
    });

    if (createContactError || !createContactData) {
      throw new Error("Failed to create contact");
    }

    const { data: sendEmailData, error: sendEmailError } = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: [toEmail],
      subject: "Welcome to the Triple C Newsletter!",
      html
    });

    if (sendEmailError || !sendEmailData) {
      throw new Error("Failed to send email");
    }

    return { error: null };
  } catch (e) {
    if (e instanceof Error) {
      return { error: e.message };
    } else {
      return { error: "Something went wrong" };
    }
  }
};
