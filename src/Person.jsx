import { useState } from 'react';

export default function Person() {
  const [person, setPerson] = useState({ name: 'John', age: 100 });

  // BAD EXAMPLE DON'T DO THIS
  // const handleIncreaseAge = () => {
  //   person.age = person.age + 1;
  //   setPerson(person);
  // };

  // GOOD EXAMPLE DO THIS
  const handleIncreaseAge = () => {
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
