import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import image1 from "../../assets/bandicam 2024-10-05 20-07-42-934.png";
import image2 from "../../assets/bandicam 2024-10-05 20-40-42-915.png";
import image3 from "../../assets/bandicam 2024-10-05 20-47-35-286.png";
import image4 from "../../assets/bandicam 2024-10-05 20-53-36-366.png";
import image5 from "../../assets/bandicam 2024-10-05 20-58-56-323.png";
import image6 from "../../assets/bandicam 2024-10-05 21-02-10-169.png";
import image7 from "../../assets/bandicam 2024-10-05 21-35-14-249.png";
import image8 from "../../assets/bandicam 2024-10-05 21-34-16-083.png";
import image9 from "../../assets/bandicam 2024-10-05 21-26-35-885.png";
import image10 from "../../assets/bandicam 2024-10-05 21-31-26-416.png";
import Style from "./Projects.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants/Variants";

const data = [
  {
    id: 1,
    title: "Free Games",
    category: "reactTs",
    imgUrl: image1,
    paragraph:
      "The project showcased at Free Games Wheat is an engaging and user-friendly web application that offers a curated selection of free online games. Designed with a modern and intuitive interface, this platform allows users to easily browse through various game categories, ensuring an enjoyable gaming experience for all ages. With seamless navigation and quick loading times, players can effortlessly explore a diverse range of genres, from action and adventure to puzzles and strategy games. The site not only emphasizes accessibility but also fosters a vibrant community of gamers, encouraging them to share their favorite titles and experiences. Overall, Free Games Wheat stands out as a go-to destination for anyone looking to dive into the world of free gaming without any hassle.",
    demo: "https://free-games-wheat.vercel.app/",
    code: "https://github.com/MohamedRadwan10/Free-Games",
  },
  {
    id: 2,
    title: "yummy",
    category: "reactJs",
    imgUrl: image2,
    paragraph:
      "The project featured at Yummy Seven is a delightful and visually appealing web application that showcases a variety of delicious recipes and culinary inspiration. With its user-friendly interface, Yummy Seven allows visitors to effortlessly explore an extensive collection of recipes, categorized by meal type, ingredients, and dietary preferences. Each recipe is presented with mouth-watering images, detailed instructions, and nutritional information, making it easy for home cooks of all skill levels to whip up tasty dishes. The app also incorporates a search function, enabling users to quickly find specific recipes or ingredients. With an emphasis on community engagement, Yummy Seven encourages users to share their culinary creations and tips, fostering a vibrant environment for food enthusiasts. Overall, this project serves as an excellent resource for anyone looking to expand their cooking repertoire and enjoy the art of gastronomy.",
    demo: "https://yummy-seven-eta.vercel.app/",
    code: "https://github.com/MohamedRadwan10/Yummy",
  },
  {
    id: 3,
    title: "Smart Shopping",
    category: "reactJs",
    imgUrl: image3,
    paragraph:
      "The project showcased at Smart Shopping is an innovative web application designed to enhance the online shopping experience for users. With a sleek and modern interface, Smart Shopping allows customers to browse a wide array of products across various categories, making it easier to find exactly what they need. The platform features advanced filtering options, enabling users to sort items by price, popularity, and other criteria, thus streamlining the shopping process. Additionally, Smart Shopping integrates a user-friendly shopping cart and checkout system, ensuring a smooth transaction experience. The application also emphasizes user engagement by allowing customers to leave reviews and ratings, fostering a community of informed shoppers. Overall, Smart Shopping stands out as a comprehensive solution for those looking to make informed purchasing decisions while enjoying the convenience of online shopping.",
    demo: "https://smart-shopping-drab.vercel.app/",
    code: "https://github.com/MohamedRadwan10/Smart-Shopping",
  },
  {
    id: 4,
    title: "Testimonial",
    category: "css",
    imgUrl: image4,
    paragraph:
      "The project featured at Testimonial is a beautifully crafted web application that showcases a collection of testimonials in an engaging and interactive format. Designed with a clean and modern aesthetic, this project highlights the importance of customer feedback and experiences in building trust and credibility for businesses. Users can easily navigate through various testimonials, each presented with visually appealing layouts and animations that enhance the overall user experience. The application not only emphasizes readability but also incorporates responsive design elements, ensuring that it looks great on any device. By providing a platform for sharing authentic reviews, this project serves as a valuable resource for potential customers seeking insight into the quality of products and services. Overall, the Testimonial project exemplifies how user feedback can be effectively showcased to foster confidence and encourage positive customer relationships.",
    demo: "https://mohamedradwan10.github.io/Testimonial/",
    code: "https://github.com/MohamedRadwan10/Testimonial",
  },
  {
    id: 5,
    title: "Huddle Landing",
    category: "css",
    imgUrl: image5,
    paragraph:
      "The project showcased at Huddle Landing is an elegantly designed web application that serves as a landing page for a collaborative platform aimed at enhancing team communication and productivity. With its modern layout and visually striking graphics, Huddle Landing effectively captures the essence of teamwork and collaboration. The page features a clean and intuitive interface, showcasing key features of the platform, including user testimonials and engaging call-to-action buttons that encourage visitors to join the community. The responsive design ensures a seamless experience across devices, making it accessible to users on both desktop and mobile. By highlighting the benefits of effective collaboration and providing a clear pathway to engagement, Huddle Landing stands out as an impressive introduction to a service that aims to bring teams together and streamline their workflows. Overall, this project exemplifies thoughtful web design combined with a strong focus on user experience and community building.",
    demo: "https://mohamedradwan10.github.io/huddle-landing/",
    code: "https://github.com/MohamedRadwan10/huddle-landing",
  },
  {
    id: 6,
    title: "Chat App",
    category: "css",
    imgUrl: image6,
    paragraph:
      "The project featured at Chat App is an innovative web application designed to facilitate real-time communication between users in a sleek and user-friendly environment. With its vibrant interface and intuitive navigation, the Chat App allows users to create chat rooms, send messages, and engage in lively conversations with friends or fellow users. The application emphasizes seamless interaction, incorporating features such as message notifications and a responsive layout that ensures a smooth experience on both desktop and mobile devices. Built with modern web technologies, the Chat App showcases the power of real-time messaging and community engagement, making it an ideal platform for users seeking to connect and collaborate. Overall, this project is a testament to effective web design and functionality, enabling users to foster connections and share ideas in a dynamic online setting.",
    demo: "https://mohamedradwan10.github.io/chat-app/",
    code: "https://github.com/MohamedRadwan10/chat-app",
  },
  {
    id: 7,
    title: "Fylo Data Storaget",
    category: "css",
    imgUrl: image7,
    paragraph:
      "The project showcased at foodie is a captivating web application that exemplifies creativity and functionality in web design. This project serves as a personal portfolio, beautifully displaying a range of skills and projects developed by the creator. With its clean layout and visually appealing graphics, users can easily navigate through various sections that highlight different works, technologies used, and personal achievements. The responsive design ensures that the portfolio looks stunning on all devices, allowing potential employers or collaborators to appreciate the creator's work from anywhere. By integrating interactive elements and smooth transitions, the project not only showcases technical expertise but also emphasizes the importance of a compelling online presence. Overall, this project stands as an impressive demonstration of the creator's dedication to quality and innovation in the field of web development.",
    demo: "https://mohamedradwan10.github.io/fylo-data-storage/",
    code: "https://github.com/MohamedRadwan10/fylo-data-storaget",
  },
  {
    id: 8,
    title: "Summary",
    category: "css",
    imgUrl: image8,
    paragraph:
      "The project showcased at summary component is a dynamic web application designed to simplify task management and enhance productivity for users. Featuring a clean and organized interface, this project allows users to effortlessly create, edit, and delete tasks, making it easy to keep track of their daily activities. The application prioritizes user experience with intuitive navigation and responsive design, ensuring that it functions smoothly on both desktop and mobile devices. Additionally, Task 2 incorporates essential features such as task categorization and status updates, enabling users to prioritize their workload effectively. By combining practicality with a modern aesthetic, this project serves as a valuable tool for anyone looking to streamline their task management process and boost overall efficiency in their daily lives. Overall, Task 2 exemplifies thoughtful design and usability, empowering users to take control of their tasks with ease.",
    demo: "https://mohamedradwan10.github.io/task2/",
    code: "https://github.com/MohamedRadwan10/task2",
  },
  {
    id: 9,
    title: "Calculator App",
    category: "js",
    imgUrl: image9,
    paragraph:
      "The project showcased at Calculator App is a sleek and user-friendly web application that brings a modern twist to the classic calculator experience. Designed with a minimalist interface, this app allows users to perform a wide range of arithmetic operations with ease, featuring clear buttons and an intuitive layout that enhances usability. The responsive design ensures that the calculator functions seamlessly on various devices, from desktops to smartphones, making it accessible for users on the go. With its functionality extending beyond basic calculations, the app also includes advanced features like decimal operations and clear display options, catering to both casual users and those needing more complex computations. Overall, the Calculator App stands out not only for its aesthetic appeal but also for its efficient performance, providing a reliable tool for anyone looking to simplify their mathematical tasks with a modern touch.",
    demo: "https://mohamedradwan10.github.io/Calculator-app/",
    code: "https://github.com/MohamedRadwan10/Calculator-app",
  },
  {
    id: 10,
    title: "Faq Accordion",
    category: "js",
    imgUrl: image10,
    paragraph:
      "The project showcased at Calculator App is a sleek and user-friendly web application that brings a modern twist to the classic calculator experience. Designed with a minimalist interface, this app allows users to perform a wide range of arithmetic operations with ease, featuring clear buttons and an intuitive layout that enhances usability. The responsive design ensures that the calculator functions seamlessly on various devices, from desktops to smartphones, making it accessible for users on the go. With its functionality extending beyond basic calculations, the app also includes advanced features like decimal operations and clear display options, catering to both casual users and those needing more complex computations. Overall, the Calculator App stands out not only for its aesthetic appeal but also for its efficient performance, providing a reliable tool for anyone looking to simplify their mathematical tasks with a modern touch.",
    demo: "https://mohamedradwan10.github.io/Faq-accordion/",
    code: "https://github.com/MohamedRadwan10/Faq-accordion",
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(true);
  const defultArr = data.filter((item) => item.category === "reactJs");
  const [arr, setArr] = useState(defultArr);

  function css() {
    const newArr = data.filter((item) => item.category === "css");
    setArr(newArr);
  }
  function all() {
    setArr(data);
  }
  function reactJs() {
    const newArr = data.filter((item) => item.category === "reactJs");
    setArr(newArr);
  }
  function js() {
    const newArr = data.filter((item) => item.category === "js");
    setArr(newArr);
  }
  function reactTs() {
    const newArr = data.filter((item) => item.category === "reactTs");
    setArr(newArr);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="py-5 border-bottom" id="projects">
        <h1 className="text-center txt-title">Projects</h1>
        <Row className="py-4">
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            animate={isVisible ? "show" : "exit"}
            
            className="col-md-3 d-flex flex-column gap-3 "
          >
            <motion.button
              variants={fadeIn("up", 0.2)}
              className="btn btn-outline-secondary"
              onClick={() => all()}
              aria-label="View all projects"
            >
              All Projects
            </motion.button>
            <motion.button
              variants={fadeIn("up", 0.6)}
              className="btn btn-outline-secondary"
              onClick={() => css()}
              aria-label="View HTML & CSS projects"
            >
              HTML & CSS
            </motion.button>
            <motion.button
              variants={fadeIn("up", 1)}
              className="btn btn-outline-secondary"
              onClick={() => js()}
              aria-label="View JavaScript projects"
            >
              JavaScript
            </motion.button>
            <motion.button
              variants={fadeIn("up", 1.4)}
              className="btn btn-outline-secondary"
              onClick={() => reactJs()}
              aria-label="View React JS projects"
            >
              React JS
            </motion.button>
            <motion.button
              variants={fadeIn("up", 1.8)}
              className="btn btn-outline-secondary"
              onClick={() => reactTs()}
              aria-label="View React TypeScript projects"
            >
              React TypeScript
            </motion.button>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            animate={isVisible ? "show" : "exit"}
            className="col-md-9 row py-2 gap-3  mx-auto"
          >
            {arr.length > 0 ? (
              arr.map((item) => (
                <div className={`${Style.product} col-md-3`} key={item.id}>
                  <img
                    className="w-100"
                    src={item.imgUrl}
                    alt={item.title}
                    loading="lazy"
                    draggable="false"
                  />
                  <div className="box pt-2 px-1">
                    <h5 className="txt-title fs-4">
                      {item.title.split(" ").slice(0, 2).join(" ")}
                    </h5>
                    <p className="text-secondary w-100 ">
                      {item.paragraph.split(" ").slice(0, 11).join(" ")}
                      {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aliquam minus delectus quibusdam asperiores et laudantium. */}
                    </p>
                    <div className="icon d-flex justify-content-end gap-2 px-2">
                      <a href={item.demo} aria-label={`Demo for ${item.title}`}>
                        <i className="fa-solid fa-link text-h2"></i>
                      </a>
                      <a href={item.code} aria-label={`Code for ${item.title}`}>
                        <i className="fa-brands fa-github text-h2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white fs-2">No projects available</p>
            )}
          </motion.div>
        </Row>
      </section>
    </>
  );
}
