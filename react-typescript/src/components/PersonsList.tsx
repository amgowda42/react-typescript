export type Person = {
  firstName: string;
  lastName: string;
};

type PersonListTypes = {
  persons: Person[];
};

const PersonsList = ({ persons }: PersonListTypes) => {
  return (
    <div>
      {persons.map((person) => (
        <div key={person.firstName}>
          {person.firstName} {"  "} {person.lastName}
        </div>
      ))}
    </div>
  );
};

export default PersonsList;
