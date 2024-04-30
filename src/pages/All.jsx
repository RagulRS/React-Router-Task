
import { Link } from "react-router-dom";
import styles from './All.module.css'

const All = () => {
  const data = [
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js.png",
      link: "https://www.guvi.in/blog/how-to-fetch-data-using-api-in-react/",
      text: "Use ReactJS to Fetch and Display Data from API - 5 Simple Steps",
    },{
        img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs-1536x864.png",
        link:"https://www.guvi.in/blog/how-to-render-an-array-of-objects-in-react/",
        text:"20 Mechanical Engineering Project Ideas",
    },{
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/01/How-to-set-up.png",
      link:"https://www.guvi.in/blog/how-to-setup-react-router-v6/",
      text:"How to Setup React Router v6? | Tutorial 2024",
  }, 
  
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/03/programming-lang-features-image.jpg",
    link:"https://www.guvi.in/blog/easiest-programming-languages-to-hardest-ranked/",
    text:"10 Hardest and Easiest Programming Languages in 2024",
},//fsd
  {
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
},//cb
{
  img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1200x675.png",
  link: "https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/",
  text: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
},
{
  img: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1200x675.png",
  link: "https://www.guvi.in/blog/types-of-cybersecurity/",
  text: "8 Different Types of Cybersecurity and Threats Involved",
},{
  img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
  link: "https://www.guvi.in/blog/what-is-hacking/",
  text: "What Is Hacking? Types of Hacking & More",
},//CC
{
  img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Feature-image-Effective-Cloud-Computing-Career-Roadmap.webp",
  link: "https://www.guvi.in/blog/cloud-computing-career-roadmap/",
  text: "Effective Cloud Computing Career Roadmap 2024",
},
{
  img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Cloud-Computing-Jobs-without-Coding-1-1200x571.png",
  link: "https://www.guvi.in/blog/top-non-coding-jobs-in-cloud-computing/",
  text: "Top 10 High Paying Cloud-Computing Jobs without Coding in 2024",
},{
  img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-7.webp",
  link: "https://www.guvi.in/blog/cloud-computing-project-ideas/",
  text: "Top 10 Cloud Computing Project Ideas [2024]",
},//DS
{
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
},

  ];
  return (<>
  <h1>Articles to Learn</h1>
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
</>
  );
};
export default All;
