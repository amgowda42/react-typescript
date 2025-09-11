

import type { PersonPropTypes } from "../utils/Person.types";
// type PersonTypes = {
//   person: {
//     firstName: string;
//     lastName: string;
//     age: number;
//   };
// };

const Person = ({ person }: PersonPropTypes) => {
  return <div>{person.firstName}</div>;
};

export default Person;
