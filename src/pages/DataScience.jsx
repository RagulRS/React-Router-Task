import { Link } from "react-router-dom";
import styles from "./DataScience.module.css";
const dataScience = () => {

    const data = [{
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4-1200x676.png",
        link: "https://www.guvi.in/blog/roles-and-responsibilities-of-a-data-scientist/",
        text: "Roles and Responsibilities of a Data Scientist",
      },
      {
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science-1200x628.png",
        link: "https://www.guvi.in/blog/how-long-would-it-take-to-learn-data-science/",
        text: "How Long Would It Take to Learn Data Science?",
      },{
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Everything-about-Data-Scientist-Salary-in-India-2023-1200x628.png",
        link: "https://www.guvi.in/blog/everything-about-data-scientist-salary-in-india/",
        text: "Everything about Data Scientist Salary in India | 2024",
      },];

    return(
        <div>
            <h1>DataScience:</h1>
            <div className={styles["container-1"]}>
  {data.map((data, index) => (
    <div  key={index} className={styles["card-container"]} >
      <Link to={data.link} className={styles["card-img-top"]}>
        <img
          style={{ width: 420, height: 315 }}
          src={data.img}
          className="Image-1"
          alt="React"
        />{" "}
        <div className={styles["card-title"]}>
          <Link to={data.link}>
           <p>{data.text}</p> 
          </Link>
        </div>
      </Link>
    </div>
  ))}
</div>
        </div>
    );
}
export default dataScience;