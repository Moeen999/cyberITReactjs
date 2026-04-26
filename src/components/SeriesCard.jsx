const SeriesCard = ({ data, index }) => {
  const { name, img_url, rating, description, genre, cast, watch_url } = data;
  return (
    <>
      <div key={index}>
        <h1>{name}</h1>
        <img src={img_url} alt={name} />
        <p>Rating: {rating}</p>
        <p>Description: {description}</p>
        <p>Genre: {genre[0]}</p>
        <p>Cast: {cast[0]}</p>
        <button>
          <a target="_blank" href={watch_url}>
            Watch Now
          </a>
        </button>
      </div>
    </>
  );
};

export default SeriesCard;
