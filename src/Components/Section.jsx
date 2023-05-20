export const Section = ({ label, children,onClick }) => {
  const favoriteDogCount = 1;
  const unfavoriteDogCount = 2;
  return (
    <section>
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* Add the class 'active' to any selector in order to make it's color change */}
          {/* This should display the favorited count */}
          <div onClick={()=>onClick(true)} className={`selector active`}>
            favorited ( {favoriteDogCount} )
          </div>

          {/* This should display the unfavorited count */}
          <div onClick={()=>onClick(false)}  className={`selector`}>unfavorited ( {unfavoriteDogCount} )</div>
          <div className={`selector`}>create dog</div>
        </div>
      </div>
      {children}
    </section>
  );
};
