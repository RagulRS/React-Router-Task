import { Link } from "react-router-dom";
import styles from './CyberSecurity.module.css';

const CyberSecurity = () => {
    const data = [{
        img: "https://www.cdn.com/panel/page_images/2907_1234_cyber-security.jpg",
        link: "https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/",
        text: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      },
      {
        img: "https://online.sbu.edu/sites/default/files/field/image/sbu-cybersecurity-job-outlook-feature.jpg",
        link: "https://www.guvi.in/blog/types-of-cybersecurity/",
        text: "8 Different Types of Cybersecurity and Threats Involved",
      },{
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
        link: "https://www.guvi.in/blog/what-is-hacking/",
        text: "What Is Hacking? Types of Hacking & More",
      }];
    
    return(
        <div>

            <h1>Cyber Security:</h1>
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
export default CyberSecurity;