import type { Actions } from "./$types";

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const firstName = formData.get("given-name");
    const lastName = formData.get("family-name");
    const email = formData.get("email");
    const terms = formData.has("terms");

    console.log({ firstName, lastName, email, terms });
  }
} satisfies Actions;
