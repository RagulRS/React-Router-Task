
import { Link } from "react-router-dom";
import styles from './All.module.css'

const All = () => {
  const data = [
    {
      img: "https://ecodesoft.com/wp-content/uploads/2022/10/react.jpg",
      link: "https://www.guvi.in/blog/how-to-fetch-data-using-api-in-react/",
      text: "Use ReactJS to Fetch and Display Data from API - 5 Simple Steps",
    },{
        img:"https://knackforge.com/wp-content/uploads/2022/11/Benefits-of-ReactJS.jpg",
        link:"https://www.guvi.in/blog/how-to-render-an-array-of-objects-in-react/",
        text:"20 Mechanical Engineering Project Ideas",
    },{
      img:"https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Illustration.jpg",
      link:"https://www.guvi.in/blog/how-to-setup-react-router-v6/",
      text:"How to Setup React Router v6? | Tutorial 2024",
  }, 
  
  {
    img:"https://cdn.educba.com/academy/wp-content/uploads/2019/10/Best-Programming-Languages.png",
    link:"https://www.guvi.in/blog/easiest-programming-languages-to-hardest-ranked/",
    text:"10 Hardest and Easiest Programming Languages in 2024",
},//fsd
  {
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_.webp",
    link: "https://www.guvi.in/blog/how-long-would-it-take-to-be-a-full-stack-developer/",
    text: "How Long Would It Take to Be a Full Stack Developer?",
  },
  {
      img:"https://syspree.com/wp-content/uploads/2020/07/Web-Development-company-in-Mumbai-_What-is-a-CDN-and-the-Advantages-of-CDNs-for-website-hosting_-_-SySpree.jpg",
      link:"https://www.guvi.in/blog/web-development-roadmap-for-beginners/",
      text:"Best Web Development Roadmap for Beginners 2024",
  },{
    img:"https://www.keycdn.com/img/support/apache-cdn.png",
    link:"https://www.guvi.in/blog/how-does-apache-work/",
    text:"How does Apache work? A detailed introduction to Apache",
}, {
  img:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210222183454/How-to-Become-a-Full-Stack-Web-Developer-in-2021.png",
  link:"https://www.guvi.in/blog/full-stack-developer-frameworks/",
  text:"Top 10 Full-Stack Developer Frameworks in 2024",
},{
  img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses-768x480.webp",
  link:"https://www.guvi.in/blog/best-full-stack-development-online-courses/",
  text:"7 Best Full-Stack Development Online Courses [2024] ",
},//cb
{
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
},
//DS
{
  img: "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg",
  link: "https://www.guvi.in/blog/roles-and-responsibilities-of-a-data-scientist/",
  text: "Roles and Responsibilities of a Data Scientist",
},
{
  img: "https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg",
  link: "https://www.guvi.in/blog/how-long-would-it-take-to-learn-data-science/",
  text: "How Long Would It Take to Learn Data Science?",
},{
  img: "https://logicmojo.com/assets/dist/new_pages/images/data-scientist-salary.jpg",
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
