import type { SessionAction, SessionState } from "@/lib/session-reducer";
import { createContext, useContext } from "react";

export const SessionContext = createContext<SessionState | null>(null);
export const SessionDispatchContext = createContext<React.ActionDispatch<
  [action: SessionAction]
> | null>(null);

export function useSession() {
  const ctx = useContext(SessionContext);
  if (ctx === null)
    throw new Error("useSession must be used inside <SessionProvider>");
  return ctx;
}

export function useSessionDispatch() {
  const ctx = useContext(SessionDispatchContext);
  if (ctx === null)
    throw new Error("useSessionDispatch must be used inside <SessionProvider>");
  return ctx;
}
