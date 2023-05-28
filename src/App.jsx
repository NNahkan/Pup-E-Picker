import { useEffect, useState } from "react";
import "./App.css";
import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import "./fonts/RubikBubbles-Regular.ttf";

const URL = "http://localhost:3000/dogs";

function App() {
  const [data, setData] = useState(null);
  const [isFavorite, setIsFavorite] = useState(null);
  const [isCreatePage, setIsCreatePage] = useState(false);

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
        <Section
          isCreatePage={isCreatePage}
          setIsCreatePage={setIsCreatePage}
          setIsFavorite={setIsFavorite}
          label={"Dogs: "}
        >
          {isCreatePage ? (
            <CreateDogForm
              fetchData={fetchData}
              setIsCreatePage={setIsCreatePage}
              setData={setData}
            />
          ) : (
            <Dogs
              isFavorite={isFavorite}
              data={data}
              setData={setData}
              label={"All Dogs"}
            />
          )}
        </Section>
      </div>
    )
  );
}

export default App;
