import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { logInWithPassword } from "@/lib/actions";
import type { LoginPayload } from "@/lib/types";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loginPayload, setLoginPayload] = useState<LoginPayload>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const login = useMutation({
    mutationFn: (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      return logInWithPassword(loginPayload);
    },
    onSuccess: () => {
      navigate("/");
      setError(null);
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div>
        <h1 className="mb-6 text-2xl font-medium">Login</h1>
        <form onSubmit={login.mutate}>
          <FieldSet className="mb-4 min-w-56">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="text"
                  placeholder="myemail@example.com"
                  value={loginPayload.email}
                  onChange={(e) =>
                    setLoginPayload((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={loginPayload.password}
                  onChange={(e) =>
                    setLoginPayload((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Button type="submit">Login</Button>
        </form>
        {error && <div>{error}</div>}
      </div>
    </div>
  );
}
