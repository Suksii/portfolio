import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext.jsx";
import KsportImg from "../assets/ksport/ksport.webp";
import BusTicketImg from "../assets/busticket/busticket.webp";
import LevelUpImg from "../assets/levelup/levelup.webp";
import TimePlusImg from "../assets/timeplus/timeplus.webp";
import RentACarImg from "../assets/rentacar/rentacar-admin-homepage.webp";
import ChatAppImg from "../assets/chat-app/chat-app_home-page.webp";
import FoodOrderingImg from "../assets/food-ordering/food-ordering-categories.webp";

const Projects = ({ handleOpen }) => {
  const projects = [
    {
      title: "Ksport",
      subtitles: ["Next.js", "React", "TypeScript", "TailwindCSS", "REST API"],
      description: (
        <p>
          Ksport is a modern, headless e-commerce storefront for a sportswear
          retailer, built with Next.js, TypeScript and TailwindCSS on top of a
          Laravel REST API.
          <br />
          It features a full product catalog with categories, brands and
          advanced search, cart and checkout with online payment, a wishlist,
          user accounts with order history and a store locator.
          <br />
          Built with server-side rendering for performance and SEO, and TanStack
          Query for efficient data fetching and caching.
        </p>
      ),
      url: "https://k-sport.me",
      image: KsportImg,
      github: "",
    },
    {
      title: "BusTicket",
      subtitles: ["Next.js", "TypeScript", "TailwindCSS", "i18n"],
      description: (
        <p>
          BusTicket is an online bus-ticket booking platform built with Next.js
          and TypeScript, available in 15 languages via next-intl.
          <br />
          Users can search bus routes, select seats and pay online or offline,
          view and manage their ticket history, verify return tickets and even
          rent a bus.
          <br />
          The platform also includes blogs, an FAQ and an integrated AI chatbot,
          with Google OAuth, reCAPTCHA and online payment integrations.
        </p>
      ),
      url: "https://busticket4.me",
      image: BusTicketImg,
      github: "",
    },
    {
      title: "LevelUp",
      subtitles: ["PHP", "JavaScript", "SASS", "E-commerce"],
      description: (
        <p>
          LevelUp is an e-commerce storefront built on a custom PHP platform.
          <br />
          It includes a full product catalog with categories and brands, cart
          and checkout, wishlist, blog, multi-language support and shipping,
          email and payment integrations.
          <br />I worked on building and maintaining the store, including a full
          UI redesign with new, responsive styling.
        </p>
      ),
      url: "https://level-up.me",
      image: LevelUpImg,
      github: "",
    },
    {
      title: "TimePlus",
      subtitles: ["PHP", "JavaScript", "SASS", "E-commerce"],
      description: (
        <p>
          TimePlus is an online store for watches and jewelry, built on a custom
          PHP e-commerce platform.
          <br />
          It offers a full product catalog, cart and checkout, wishlist, blog,
          multi-language support and shipping, email and payment integrations.
          <br />I handled development and maintenance of the store, including a
          complete responsive UI redesign.
        </p>
      ),
      url: "https://timeplus.me",
      image: TimePlusImg,
      github: "",
    },
    {
      title: "Food ordering",
      subtitles: ["Next.js", "Typescript", "PostgreSQL", "Prisma"],
      description: (
        <p>
          This project is a full stack Next.js and Typescript application
          designed to facilitate the ordering of food and drinks.
          <br />
          PostgreSQL is employed as the primary database, while Prisma serves as
          the ORM, ensuring efficient database management and migration.
          <br />
          User Authentication is implemented using NextAuth.
          <br />
          The application allows users to login via Google or Facebook provider,
          browse menu, List featured products and use cart and order products.
          <br />
          Administrators have the same ability as users, additionaly they can
          add or delete products and see orders and change their status.
          <br />
        </p>
      ),
      url: "",
      image: FoodOrderingImg,
      github: "https://github.com/Suksii/food-ordering-app",
    },
    {
      title: "Rent a Car Project",
      subtitles: ["React", "Javascript", "Node.js", "Express", "MongoDB"],
      description: (
        <p>
          Rent a Car Project is a full-stack application that allows users to
          rent cars. The front-end is built using React.js, while the back-end
          is powered by Node.js, Express, and MongoDB. Key features include user
          authentication, car rental, and user profile management. The
          application also includes a car management system for administrators,
          with functionalities for adding, updating, and deleting cars.
        </p>
      ),
      url: "",
      image: RentACarImg,
      github: "https://github.com/Suksii/rentacar",
    },
    {
      title: "Chat App",
      subtitles: [
        "React",
        "Javascript",
        "Node.js",
        "Express",
        "Socket.io",
        "MongoDB",
      ],
      description: (
        <p>
          Chat App is a full-stack application that allows users to chat in
          real-time. The front-end is built using React.js, while the back-end
          is powered by Node.js, Express, Socket.io, and MongoDB. Key features
          include user authentication and real-time messaging.
        </p>
      ),
      url: "",
      image: ChatAppImg,
      github: "https://github.com/Suksii/chat-app",
    },
    // {
    //   title: "Movie & TV Shows",
    //   subtitles: ["React", "Javascript"],
    //   description: (
    //     <p>
    //       This React.js web application allows users to browse, search, and
    //       interact with a collection of movies and TV shows. It includes
    //       separate pages for movies and TV shows, detailed individual pages, a
    //       loading spinner for data fetching, search functionality, and
    //       pagination. Ratings are dynamically displayed in a circular progress
    //       bar, and content is shown in card formats with a slider for easier
    //       browsing. <br /> The actions component includes options to copy URLs,
    //       share links, watch YouTube trailers, and view on Netflix. Technologies
    //       used include React.js, TailwindCSS, Axios, React Router DOM, and JSON
    //       Server. Additional libraries include Slick Carousel, React Spinners,
    //       React Toastify, React Icons, and React CountUp. Key JavaScript
    //       functionalities and React hooks like useEffect and useState are
    //       employed for state and side-effect management.
    //     </p>
    //   ),
    //   url: "",
    //   image: MoviesTvShowsImg,
    //   github: "https://github.com/Suksii/movie-show",
    // },
    // {
    //   title: "Religious Objects",
    //   subtitles: ["React", "Javascript"],
    //   description: (
    //     <p>
    //       This React.js web application showcases various religious objects
    //       across different regions in Montenegro, developed based on Government
    //       requirements. Users can explore sites through an intuitive,
    //       region-based navigation system.
    //       <br />
    //       Key features include displaying religious objects by region, dynamic
    //       pages for each region and object, an interactive map, and image
    //       sliders. The application supports smooth scrolling and interval-based
    //       functionalities.
    //       <br />
    //       Technologies used include JavaScript for core functionalities, React
    //       for building the user interface with useState, React Router DOM for
    //       routing, and SASS for styling.
    //       <br />
    //       Navigate to the home page to view regions, click on a region to see
    //       its religious objects, and click on an object to view detailed
    //       information and images in a slider format.
    //     </p>
    //   ),
    //   url: "http://vjerskiobjekticg.com/",
    //   image: ReligiousObjectImg,
    //   github: "https://github.com/Suksii/religious-objects",
    // },
  ];

  const { isDarkMode } = useTheme();
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleShowMore = () => {
    setVisibleProjects((prevProjects) => prevProjects + 3);
  };

  return (
    <div className="py-2 md:py-10">
      <h2 className="text-4xl flex justify-center">Projects</h2>
      <div className="flex flex-col w-full md:w-[80%] mx-auto">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            className={`flex justify-evenly reverse ${
              isDarkMode ? "border" : "shadow-md md:shadow-2xl"
            } md:rounded-3xl min-h-[400px] my-10 md:px-6`}
          >
            <div
              style={{ flex: 1 }}
              className="flex flex-col justify-between p-5"
            >
              <div>
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <div className="flex gap-5 items-center flex-wrap">
                  {project.subtitles.map((subtitle, index) => (
                    <div
                      key={index}
                      className={`${
                        isDarkMode
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      } w-fit py-1 px-4 rounded-full`}
                    >
                      <h3 className="text-lg uppercase font-semibold">
                        {subtitle}
                      </h3>
                    </div>
                  ))}
                </div>
                <div className="py-3 text-xl md:text-base xl:text-lg">
                  {project.description}
                </div>
              </div>
              <div className="flex justify-between">
                {project.github && (
                  <div
                    onClick={() => handleOpen(project.github)}
                    className="flex items-center gap-2 cursor-pointer hover:translate-x-1 duration-200"
                  >
                    <p>Github</p>
                    <BsArrowRight />
                  </div>
                )}
                {project.url && (
                  <div
                    className="flex items-center gap-2 cursor-pointer hover:translate-x-1 duration-200"
                    onClick={() => handleOpen(project.url)}
                  >
                    <p>Visit</p>
                    <BsArrowRight />
                  </div>
                )}
              </div>
            </div>
            <div
              style={{ flex: 1 }}
              className="flex justify-center items-end rounded-t-3xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-3xl object-cover h-[380px]"
              />
            </div>
          </div>
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div className="flex justify-center">
          <button
            className={`${
              isDarkMode
                ? "bg-white text-black hover:border-white hover:bg-black hover:text-white"
                : " bg-black text-white hover:border-black hover:bg-white hover:text-black"
            } font-semibold border px-5 py-2 rounded-full duration-500`}
            onClick={handleShowMore}
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};
export default Projects;
