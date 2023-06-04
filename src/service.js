const URL = "http://localhost:3000/dogs/";

export const getAllDogsFetch = (cb) => {
  return fetch(URL)
    .then((response) => response.json())
    .then(cb);
};

export const createNewDog = async (dog, setData) => {
  const body = { ...dog, isFavorite: false };
  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((response) => setData((prevState) => [...prevState, response]));
};

export const deleteDog = async (id) => {
  fetch(`${URL}${id}`, {
    method: "DELETE",
  });
};

export const updateFavorite = (dog, setData) => {
  dog.isFavorite = !dog.isFavorite;
  fetch(`${URL}${dog.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dog),
  })
    .then((response) => response.json())
    .then((response) =>
      setData((prevState) =>
        prevState.filter((item) => (item.id === response.id ? response : item))
      )
    );
};
/* 
try {
      const response = await fetch(`${URL}${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setData((prevState) => prevState.filter((item) => item.id !== id));
        //   fetchData();
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    } */
