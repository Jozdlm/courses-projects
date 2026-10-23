import { useSession } from "../context/SessionContext";

export function useMerchant() {
  const session = useSession();

  if (session.status !== "LOGGED_IN") {
    throw new Error("useMerchant requires a logged-in session");
  }

  return session.merchant;
}
