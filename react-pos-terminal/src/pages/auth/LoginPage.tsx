import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function LoginPage() {
  return (
    <>
      <h1>Login Page</h1>
      <Button>
        <Link to={"/"}>Login</Link>
      </Button>
    </>
  );
}
