import { useSession, useSessionDispatch } from "@/context/SessionContext";
import { logInWithPassword } from "@/features/auth/";
import type { User } from "@/lib/types";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginFormValues } from "@/features/auth";
import { zodResolver } from "@hookform/resolvers/zod";

export function useLogin() {
  const navigate = useNavigate();
  const session = useSession();
  const dispatch = useSessionDispatch();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const login = useMutation({
    mutationFn: (credentials: LoginFormValues) => {
      dispatch({ type: "LOGIN_STARTED" });
      return logInWithPassword(credentials);
    },
    onSuccess: (data: User) => {
      navigate("/");
      dispatch({ type: "LOGIN_SUCCEEDED", payload: data });
    },
    onError: (error) => {
      dispatch({ type: "LOGIN_FAILED", payload: error.message });
    },
  });

  return { session, login, form };
}
