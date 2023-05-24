import { useEffect, useState } from "react";
import "./App.css";
import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import "./fonts/RubikBubbles-Regular.ttf";

const URL = "http://localhost:3000/dogs"

function App() {
  const [data, setData] = useState(null);
  const [isFavorite, setIsFavorite] = useState(true);

  const fetchData = async () => {
    const response = await fetch(URL);
    const newData = await response.json();
    setData(newData);
  };

  useEffect(() => {
    fetchData();
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
