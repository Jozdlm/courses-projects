import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/use-login";
import { Navigate } from "react-router";

export default function LoginPage() {
  const { session, login, loginPayload, setLoginPayload, error } = useLogin();

  if (session.status === "LOGGED_IN") {
    return <Navigate to="/dashboard" replace />;
  }

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
