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
    if (isInput) {
      createDog(userInput);
      setIsCreatePage(false);
     } else {
      alert("Input missed");
    }
  };
//   start from here 


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
