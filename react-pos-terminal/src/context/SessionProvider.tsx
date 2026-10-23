import { useReducer } from "react";
import { SessionContext, SessionDispatchContext } from "./SessionContext";
import { sessionReducer } from "@/lib/session-reducer";

export function SessionProvider({ children }: React.PropsWithChildren) {
  const [session, dispatch] = useReducer(sessionReducer, {
    status: "LOGGED_OUT",
  });

  return (
    <SessionContext value={session}>
      <SessionDispatchContext value={dispatch}>
        {children}
      </SessionDispatchContext>
    </SessionContext>
  );
}
