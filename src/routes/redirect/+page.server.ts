import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ url }) => {
  const to = url.searchParams.get("to");

  if (!to) {
    throw redirect(302, "/");
  }

  try {
    const target = new URL(to);
    const hostname = target.hostname;

    if (hostname === "tripleccollective.com" || hostname.endsWith(".tripleccollective.com")) {
      throw redirect(302, target.toString());
    }
  } catch {
    // fallback or log
    throw redirect(302, "/");
  }

  throw redirect(302, "/");
};
