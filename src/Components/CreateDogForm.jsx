import { useState } from "react";
import { dogPictures } from "../assets/dog-pictures";
import { createNewDog } from "../service";

export const CreateDogForm = ({ setData, setIsCreatePage, isFavorite }) => {
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

  const createDog = (dog) => {
    createNewDog(dog, setData);
  };

  const handleSubmit = (e) => {
    let isInput = true;
    e.preventDefault();
    Object.keys(userInput).forEach((key) => {
      if (userInput[key].trim() === "") isInput = false;
    });

	//  That function against the DRY principle, i SHould find to way to make it better
    if (isInput) {
      createDog(userInput);
      setIsCreatePage(false);
		// creating a function to do all the className changes
      const active = document.querySelector(".active");
      active && active.classList.remove("active");
      if (isFavorite !== null) {
        const sectionButtons = document.querySelectorAll(".selector");
        const choosenButton = isFavorite
          ? sectionButtons[0]
          : sectionButtons[1];
        choosenButton.classList.add("active");
      }
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
