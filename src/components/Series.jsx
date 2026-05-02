import seriesData from "../json/data.json";
import SeriesCard from "./SeriesCard";
import "./Series.css";

const Series = () => {
  return (
    <div className="container">
      {seriesData.map((item, index) => (
        <SeriesCard key={index} data={item} />
      ))}
    </div>
  );
};

export default Series;