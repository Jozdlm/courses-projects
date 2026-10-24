import { useEffect, useReducer } from "react";
import { SessionContext, SessionDispatchContext } from "./SessionContext";
import {
  getInitialSession,
  SESSION_STORAGE_KEY,
  sessionReducer,
} from "@/lib/session-reducer";

export function SessionProvider({ children }: React.PropsWithChildren) {
  const [session, dispatch] = useReducer(
    sessionReducer,
    undefined,
    getInitialSession,
  );

  useEffect(() => {
    if (session.status === "LOGGED_IN") {
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session.user));
    } else if (session.status === "LOGGED_OUT") {
      localStorage.removeItem(SESSION_STORAGE_KEY);
    }
    // LOGGING_IN and FAILED leave storage alone
  }, [session]);

  return (
    <SessionContext value={session}>
      <SessionDispatchContext value={dispatch}>
        {children}
      </SessionDispatchContext>
    </SessionContext>
  );
}
