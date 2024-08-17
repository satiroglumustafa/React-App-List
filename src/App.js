import { useState } from "react";
import "./App.css";
import PeopleList from "./components/PeopleList";
import { personData } from "./personData.js";

function App() {
  const [people, setPeople] = useState(personData);

  return (
    <>
      <div className="person-boxList">
        <div className="container">
          <h1 className="app-title">{people.length} Birthdays Today</h1>
          <PeopleList peopleListItems={people} />
          <button className="clearBtn" onClick={ ()=> setPeople([]) }>Clear All</button>
        </div>
      </div>
    </>
  );
}

export default App;
