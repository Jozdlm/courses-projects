import { userSchema } from "./schemas";
import type { User } from "./types";

export type SessionState =
  | { status: "LOGGED_OUT" }
  | { status: "LOGGING_IN" }
  | { status: "LOGGED_IN"; user: User }
  | { status: "FAILED"; error: string };

export type SessionAction =
  | { type: "LOGIN_STARTED" }
  | { type: "LOGIN_SUCCEEDED"; payload: User }
  | { type: "LOGIN_FAILED"; payload: string }
  | { type: "LOG_OUT" };

export const SESSION_STORAGE_KEY = "session";

export function getInitialSession(): SessionState {
  try {
    const raw = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return { status: "LOGGED_OUT" };

    const result = userSchema.safeParse(JSON.parse(raw));
    if (result.success) {
      return { status: "LOGGED_IN", user: result.data };
    }
  } catch {
    // invalid JSON or storage unavailable: fall through
  }

  localStorage.removeItem(SESSION_STORAGE_KEY);
  return { status: "LOGGED_OUT" };
}

export const sessionReducer = (
  state: SessionState,
  action: SessionAction,
): SessionState => {
  switch (action.type) {
    case "LOGIN_STARTED":
      return { status: "LOGGING_IN" };
    case "LOGIN_SUCCEEDED":
      return {
        status: "LOGGED_IN",
        user: action.payload,
      };
    case "LOGIN_FAILED":
      return {
        status: "FAILED",
        error: action.payload,
      };
    case "LOG_OUT":
      return {
        status: "LOGGED_OUT",
      };

    default: {
      const _exhaustive: never = action;
      return _exhaustive;
    }
  }
};
