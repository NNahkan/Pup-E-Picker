import { useState } from "react";
import { dogPictures } from "../assets/dog-pictures";

const URL = "http://localhost:3000/dogs/";

export const CreateDogForm = ({ fetchData, setIsCreatePage }) => {
  const [userInput, setUserInput] = useState({
    name: "",
    description: "",
    image: dogPictures.BlueHeeler,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createDog = async (dog) => {
    const body = { ...dog, isFavorite: false };
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        // Fetching data to get id for new dog
        fetchData();
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  const handleSubmit = (e) => {
    let isInput = true;
    e.preventDefault();
    Object.keys(userInput).forEach((key) => {
      if (userInput[key].trim() === "") isInput = false;
    });

    if (isInput) {
      createDog(userInput);
      setIsCreatePage(false);
		const active = document.querySelector(".active")
		active && active.classList.remove("active")
    } else {
      alert("Input missed");
    }
  };

  return (
    <form
      action=""
      id="create-dog-form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input onChange={(e) => handleInput(e)} type="text" name="name" />
      <label htmlFor="description">Dog Description</label>
      <textarea
        onChange={(e) => handleInput(e)}
        name="description"
        id=""
        cols="80"
        rows="10"
      ></textarea>
      <label htmlFor="picture">Select an Image</label>
      <select
        name="image"
        id=""
        onChange={(e) => {
          handleInput(e);
        }}
      >
        {Object.entries(dogPictures).map(([label, pictureValue]) => {
          return <option value={pictureValue}>{label}</option>;
        })}
      </select>
      <input type="submit" value="submit" />
    </form>
  );
};
