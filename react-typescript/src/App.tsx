import { Button } from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonsList from "./components/PersonsList";
import Callapi from "./components/state/Callapi";
import Status from "./components/Status";

function App() {
  const person = {
    firstName: "Annappa",
    lastName: "Gowda",
    age: 42,
  };

  const persons = [
    {
      firstName: "Annappa",
      lastName: "Gowda",
    },
    {
      firstName: "Gowtham",
      lastName: "Gowda",
    },
    {
      firstName: "Smitha",
      lastName: "Gowda",
    },
  ];
  return (
    <div>
      <Greet name="Annappa Gowda" age={25} loggedIn={false} />
      <Person person={person} />
      <PersonsList persons={persons} />
      <Status status="loading" />
      <Heading>Oscar goes to decaprio</Heading>
      <Oscar>
        <Heading>Oscar goes to decaprio</Heading>
      </Oscar>
      <Button
        handleButtonClick={(event, id) => {
          console.log(event, id);
        }}
      />
      <Callapi />
    </div>
  );
}

export default App;
