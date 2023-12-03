import { authUserSession } from "@/libs/authLib";
import Image from "next/image";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="text-color-primary">
      <h2>Dashboard</h2>
      <h5>Welcome, {user.name}</h5>
      <Image src={user.image} width={250} height={250} />
    </div>
  );
};

export default Page;
