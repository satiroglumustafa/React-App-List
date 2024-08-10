
import "./App.css";
import PeopleList from "./components/PeopleList";
import { personData } from "./personData.js";

function App() {
 
  return (
    <>
      <div className="person-boxList">
        <div className="container">
          <h1 className="app-title">5 Birthdays Today</h1>
          {personData.map((item) => (
            <PeopleList
              key={item.id}
              personImage={item.image}
              personName={item.name}
              personAge={item.age}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
