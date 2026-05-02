const SeriesCard = ({ data }) => {
  const { name, description, genre, img_url, age,rating } = data;

  // const myBtnStyles = {
  //           backgroundColor: "#372114",
  //           padding:"9px 12px",
  //           color:"white",
  //           marginTop:"4px",
  //           borderRadius:"12px",
  //           border:"none"
  //         }
  const ratingBasedStyleBtn = rating <=8.5 ? "under-rated" : "over-rated"

  return (
    <div className="card">
      <img src={img_url} alt={name} />

      <div className="card-body">
        <h2>{name}</h2>
        <span className="badge">{genre}</span>
        <p>{description}</p>

        <button
          disabled={age < 18 || rating < 8.5}
          // style={myBtnStyles}
          className={ratingBasedStyleBtn}
        >
          {age >= 18 ? "Watch Now" : "Under 18 Not Available"}
        </button>
      </div>
    </div>
  );
};

export default SeriesCard;

// normal css
// font-size:12px;

// react + css
// fontSize:"12px"
