import { Link } from "react-router-dom";
import styles from './FullStack.module.css';
const FullStack = () => {

    const data =[{
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_.webp",
        link: "https://www.guvi.in/blog/how-long-would-it-take-to-be-a-full-stack-developer/",
        text: "How Long Would It Take to Be a Full Stack Developer?",
      },
      {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/03/1.jpg",
          link:"https://www.guvi.in/blog/web-development-roadmap-for-beginners/",
          text:"Best Web Development Roadmap for Beginners 2024",
      },{
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png",
        link:"https://www.guvi.in/blog/how-does-apache-work/",
        text:"How does Apache work? A detailed introduction to Apache",
    }, {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg",
      link:"https://www.guvi.in/blog/full-stack-developer-frameworks/",
      text:"Top 10 Full-Stack Developer Frameworks in 2024",
    },{
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses-768x480.webp",
      link:"https://www.guvi.in/blog/best-full-stack-development-online-courses/",
      text:"7 Best Full-Stack Development Online Courses [2024] ",
    }];
    return(
        <div>
            <h1>FullStack:</h1>
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
export default FullStack;