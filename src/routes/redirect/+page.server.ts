import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

const correctHostnames = ["tripleccollective.com", "triplec.treez.io"];

export const load: PageServerLoad = ({ url }) => {
  const to = url.searchParams.get("to");

  if (!to) {
    throw redirect(302, "/");
  }

  const target = new URL(to);
  const hostname = target.hostname;

  const isCorrectHostname = correctHostnames.includes(hostname);

  if (!isCorrectHostname) {
    throw redirect(302, "/");
  }

  throw redirect(302, target.toString());
};
