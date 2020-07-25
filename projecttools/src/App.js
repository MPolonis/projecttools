import React from 'react';
import { Summary } from "./Summary";
import ReactDOM from "react-dom";

let names= ["Jarek", "Ala", "Roman"];

function reverseNames() {
  names.reverse();
  ReactDOM.render(<App />, document.getElementById("root"));
}

function promoteName(name) {
  names = [name, ...names.filter(val => val !== name)];
  ReactDOM.render(<App />, document.getElementById("root"));
}

export default function App() {
  return (
    <table className="table table-striped table-sm">
      <thead>
        <tr><th>nr</th><th>imię</th><th>liczba liter</th></tr>
      </thead>
      <tbody>
        {names.map((name, index) =>
          <tr key={name}>
            <Summary name={name} index={index}
              reverseCallback={reverseNames}
              promoteCallback={promoteName} />
          </tr>)}
      </tbody>
    </table>
  )
}