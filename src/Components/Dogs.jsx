import { useEffect } from "react";
import { DogCard } from "./DogCard";

export const Dogs = ({ data, isFavorite, setData, fetchData }) => {
  const deleteDog = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/dogs/${id}`, {
        method: "DELETE",
      });
      console.log(data);
      if (response.ok) {
        const dogs = data.filter((item) => item.id !== id);
        console.log(dogs);
      //   setData(dogs);
		fetchData();
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };
  /* 
  useEffect(() => {
    console.log(data);
  }, [data]); */

  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
      {data.map(
        (dog) =>
          !!dog &&
          dog.isFavorite === isFavorite && (
            <DogCard deleteDog={deleteDog} dog={dog} key={dog.id} />
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
