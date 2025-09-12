import { useState } from "react";

const LoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const handleLoggedIn = () => {
    setLoggedIn(true);
  };

  const handleLogOut = () => {
    setLoggedIn(false);
  };
  return (
    <div>
      <h1>user is {loggedIn ? "Logged In " : "Logged OUt"}</h1>
      <button onClick={handleLoggedIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default LoggedIn;
