import { useEffect, useState } from "react";
import "./App.css";
import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import "./fonts/RubikBubbles-Regular.ttf";

function App() {
  const [data, setData] = useState(null);
  const [isFavorite, setIsFavorite] = useState(true);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/dogs");
    const newData = await response.json();
    setData(newData);
  };

  useEffect(() => {
    fetchData();
    console.log(isFavorite);
  }, []);

  return (
    data && (
      <div className="App">
        <header>
          <h1>pup-e-picker </h1>
        </header>
        <Section onClick={setIsFavorite} label={"Dogs: "}>
          <Dogs
            fetchData={fetchData}
            isFavorite={isFavorite}
            data={data}
            setData={setData}
            label={"All Dogs"}
          />
          {/* <CreateDogForm /> */}
        </Section>
      </div>
    )
  );
}

export default App;
