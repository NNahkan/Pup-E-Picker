import { DogCard } from "./DogCard";

const URL = "http://localhost:3000/dogs/";

export const Dogs = ({ data, isFavorite, setData, fetchData }) => {
  const deleteDog = async (id) => {
    try {
      const response = await fetch(`${URL}${id}`, {
        method: "DELETE",
      });
      console.log(data);
      if (response.ok) {
        setData((prevState) => prevState.filter((item) => item.id !== id));
        //   fetchData();
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  const changeFavorite = async (dog) => {
    dog.isFavorite = !dog.isFavorite;
    try {
      const response = await fetch(`${URL}${dog.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dog),
      });
      if (response.ok) {
        setData((prevState) =>
          prevState.map((item) => (item.id === dog.id ? dog : item))
        );
        //   fetchData();
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
      {data.map((dog) =>
        isFavorite === null ? (
          <DogCard
            changeFavorite={changeFavorite}
            deleteDog={deleteDog}
            dog={dog}
            key={dog.id}
          />
        ) : (
          dog.isFavorite === isFavorite && (
            <DogCard
              changeFavorite={changeFavorite}
              deleteDog={deleteDog}
              dog={dog}
              key={dog.id}
            />
          )
        )
      )}
    </>
  );
};

// Right now this is a static array, but you will need to fetch these dogs from the local database
/* const dogs = [
  {
    name: "Thora",
    image: "/src/assets/boxer.png",
    description:
      "South frictionless atque architectures Legacy reintermediate payment East",
    isFavorite: false,
    id: 0,
  },
  {
    name: "Clifford",
    image: "/src/assets/cowardly.png",
    description:
      "Buckinghamshire peal outmaneuver Cargo compressing utilize Southwest whiff",
    isFavorite: false,
    id: 1,
  },
  {
    name: "Jeff",
    image: "/src/assets/dalmation.png",
    description: "Granite North connect Baht Metal North holistic deposit",
    isFavorite: true,
    id: 2,
  },
  {
    name: "Jadon",
    image: "/src/assets/blue-heeler.png",
    description: "aspernatur transmit Underpass female North tan music",
    isFavorite: true,
    id: 3,
  },
]; */
// Right now these dogs are constant, but in reality we should be getting these from our server
