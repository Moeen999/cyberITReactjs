import seriesData from "../json/data.json";
import SeriesCard from "./SeriesCard";
import styles from "../css/Series.module.css";

const Series = () => {
  return (
    <div className={styles.container}>
      {seriesData.map((item, index) => (
        <SeriesCard key={index} data={item} />
      ))}
    </div>
  );
};

export default Series;