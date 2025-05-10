import { InputField } from "./InputField";
import { useState } from "react";


/*
Zadání: Vyřešte tento úkol podobně jako předchozí, pouze s tím rozdílem, že tentokrát budete mít
  dvě pole, do kterých uživatel může psát jméno a příjmení. Výsledné jméno a příjmení se mají
  zobrazit pod nadpisem oddělené mezerou. Budete tedy potřebovat dva stavy, každý pro jedno pole.
*/

export const Ukol5 = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const bothNames = firstName + lastName;

  const inputChangeName = (name) => {
    setFirstName(name);
  }

  const inputChangeSecondName = (secondName) => {
    setLastName(secondName)
  }

  return (
    <>
      <p>Jméno: {firstName} {lastName}</p>
      <InputField label="Jméno" type="text" onValueChange={inputChangeName}/>
      <InputField label="Příjmení" type="text" onValueChange={inputChangeSecondName}/>
    </>
  );
};
