interface GreetTypes {
  name: string;
  age: number;
  loggedIn: boolean;
}

const Greet = ({ name, age, loggedIn }: GreetTypes) => {
  return (
    <div style={{ fontSize: "30px" }}>
      {loggedIn ? (
        <div>
          Hello {name} How are you yo are going to turn {age}{" "}
        </div>
      ) : (
        "Please Logged in "
      )}
    </div>
  );
};

export default Greet;
