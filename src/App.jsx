import { useEffect, useState } from "react";
import "./App.css";
import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import "./fonts/RubikBubbles-Regular.ttf";
import { getAllDogsFetch } from "./service";

function App() {
  const [data, setData] = useState(null);
  const [isFavorite, setIsFavorite] = useState(null);
  const [isCreatePage, setIsCreatePage] = useState(false);

  useEffect(() => {
    getAllDogsFetch(setData);
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
          data={data}
        >
          {isCreatePage ? (
            <CreateDogForm
              setIsCreatePage={setIsCreatePage}
              setData={setData}
              isFavorite={isFavorite}
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
