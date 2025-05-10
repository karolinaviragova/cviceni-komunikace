import { useState } from "react";

/*
Zadání: Začneme velmi jednoduše. Zařiďte, aby se po kliknutí na tlačítko zobrazilo jméno, které je
  uvnitř tlačítka. Zatím nejde o žádnou velkou komunikaci mezi komponentami, ale je to základ,
  který budeme dále rozvíjet.
*/

export const Ukol1 = () => {
  const [jmeno, setJmeno] = useState("Jirka");

  const handleName = (e) => {
    setJmeno(e.target.textContent);
  }
  return (
    <>
      <p>
        <strong>{jmeno}</strong>
      </p>
      <div>
        <button onClick={handleName}>Jirka</button>
        <button onClick={handleName}>Honza</button>
        <button onClick={handleName}>Tomáš</button>
        <button onClick={handleName}>Šimon</button>
      </div>
    </>
  );
};
