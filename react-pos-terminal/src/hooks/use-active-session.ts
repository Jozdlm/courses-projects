import { useSession } from "@/context/SessionContext";

export function useCurrentUser() {
  const session = useSession();

  if (session.status != "LOGGED_IN") {
    throw new Error("useCurrentUser requires a logged-in user");
  }

  return session.user;
}
