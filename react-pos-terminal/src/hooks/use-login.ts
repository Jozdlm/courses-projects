import { useSession, useSessionDispatch } from "@/context/SessionContext";
import { logInWithPassword } from "@/lib/actions";
import type { LoginPayload, User } from "@/lib/types";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router";

export function useLogin() {
  const navigate = useNavigate();
  const session = useSession();
  const dispatch = useSessionDispatch();
  const [loginPayload, setLoginPayload] = useState<LoginPayload>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const login = useMutation({
    mutationFn: (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch({ type: "LOGIN_STARTED" });
      return logInWithPassword(loginPayload);
    },
    onSuccess: (data: User) => {
      navigate("/");
      setError(null);
      dispatch({ type: "LOGIN_SUCCEEDED", payload: data });
    },
    onError: (error) => {
      setError(error.message);
      dispatch({ type: "LOGIN_FAILED", payload: error.message });
    },
  });

  return { session, login, loginPayload, setLoginPayload, error };
}
