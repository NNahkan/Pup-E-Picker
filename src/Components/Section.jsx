export const Section = ({
  label,
  children,
  setIsFavorite,
  setIsCreatePage,
  isCreatePage,
}) => {
  const favoriteDogCount = 1;
  const unfavoriteDogCount = 2;

  //   Need some refactoring
  const changeActive = (e) => {
    if (e.target.className === "selector active") {
      e.target.classList.remove("active");
      setIsFavorite(null);
    } else {
      const div = document.querySelector(".active");
      div && div.classList.remove("active");
      e.target.classList.add("active");
    }
  };

  const changeFavorite = (e, isFavorite) => {
    setIsCreatePage(false);
    setIsFavorite((prevState) =>
      prevState === isFavorite ? null : isFavorite
    );
    changeActive(e);
  };

  return (
    <section>
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* Add the class 'active' to any selector in order to make it's color change */}
          {/* This should display the favorited count */}
          <div onClick={(e) => changeFavorite(e, true)} className={`selector`}>
            favorited ( {favoriteDogCount} )
          </div>

          {/* This should display the unfavorited count */}
          <div onClick={(e) => changeFavorite(e, false)} className={`selector`}>
            unfavorited ( {unfavoriteDogCount} )
          </div>
          <div
            onClick={(e) => {
              setIsCreatePage(!isCreatePage);
              changeActive(e);
            }}
            className={`selector`}
          >
            {isCreatePage ? "Go Back to Main Page" : "Create Dog"}
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};
