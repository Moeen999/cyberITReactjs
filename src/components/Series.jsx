import seriesData from "../json/data.json";
import SeriesCard from "./SeriesCard";

const Series = () => {
  // const name = "Queen of Tears";
  // const description =
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, minus. Delectus, odit aspernatur aperiam tenetur ab hic debitis explicabo ipsum neque nesciunt totam sapiente minima, saepe architecto soluta illo tempora?";
  // const genre = "Comedy";
  // const imgSrc = "/download.jpeg";
  // const age = 15;

  // function canWatch() {
  //   let canwatch = "Watch Now";

  //   if (age >= 18) {
  //     return canwatch;
  //   } else {
  //     return (canwatch = "Not available ");
  //   }
  // }

  return (
    // <>
    //   <img src={imgSrc} alt="" />
    //   <h1>{name}</h1>
    //   <p>{description}</p>
    //   <p>{genre}</p>
    //   <button disabled={age < 18}>{canWatch()}</button>
    //   <br />

    //   <img src={imgSrc} alt="" />
    //   <h1>{name}</h1>
    //   <p>{description}</p>
    //   <p>{genre}</p>
    //   <button disabled={age < 18}>{canWatch()}</button>

    //   <br />

    //   <img src={imgSrc} alt="" />
    //   <h1>{name}</h1>
    //   <p>{description}</p>
    //   <p>{genre}</p>
    //   {/* <button disabled={age < 18}>{canWatch()}</button> */}
    //   <button disabled={age < 18}>
    //     {age >= 18 ? "Watch Now" : "Under 18 Not Available"}
    //   </button>
    // </>

    <>
      {seriesData?.map((data, index) => (
        <SeriesCard data={data} index={index} />
      ))}
    </>
  );
};

export default Series;
