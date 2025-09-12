import { useState } from "react";

const User = () => {
  interface UserTypes {
    name: string;
    email: string;
  }

  const [user, setUser] = useState<UserTypes | null>(null);

  const handleLogging = () => {
    setUser({
      name: "Annappa",
      email: "annappag@email.com",
    });
  };

  return (
    <div>
      User
      <h1>{user?.name}</h1>
      <h1>{user?.email}</h1>
      <button onClick={handleLogging}>Loggin</button>
    </div>
  );
};

export default User;
