import { authUserSession } from "@/libs/authLib";
import Link from "next/link";

const UserAction = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign out" : "Sign in";
  const userUrl = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex gap-2 justify-between">
      {user ? <Link href={"/users/dashboard"} className="py-1">Dashboard</Link> : null}

      <Link href={userUrl} className="bg-color-dark text-color-accent py-1 px-12 inline-block">{actionLabel}</Link>
    </div>
  );
};

export default UserAction;
