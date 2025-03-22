import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Bond from "../assets/bond.png";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section name="home" className="relativ ">
      <div
        className="absolute right-0 top-[-20%] w-80 h-80 bg-primaryColorLight mix-blend-screen
      rounded-full blur-[150px] opacity-50"
      ></div>

      <div className="container">
        {/* bg image */}

        {/* Hero Content */}
        <div className="flex items-center gap-5">
          <div className="space-y-2 md:w-1/2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl sm:pt-8 font-bold">
              I am Durotimi
            </h3>

            <h1 className="title">Full-Stack Developer</h1>

            <p className="max-w-xl text-xl pb-5">
              I disscet intricate user experience issues to craft solutions
              focused on integrity, linking billions of individual.
            </p>

            <div className="flex items-center flex-wrap gap-5">
              <Link to="portfolio">
                <button
                  className="text-primaryColor group border-2 px-6 py-3 my-2 flex items-center
              hover:bg-primaryColorLight border-primaryColor rounded-full"
                >
                  View My Work
                  <span className="group-hover:rotate-90 duration-300 ml-2">
                    <HiArrowNarrowRight />
                  </span>
                </button>
              </Link>

              <div className="flex items-center gap-5">
                <div className="social-icon">
                  <a href="https://x.com/Oluwasamibond">
                    <FaTwitter />
                  </a>
                </div>

                <div className="social-icon">
                  <a href="https://www.instagram.com/___oluwasamibond/">
                    <FaInstagram />
                  </a>
                </div>

                <div className="social-icon">
                  <a href="https://github.com/Oluwasamibond">
                    <FaGithub />
                  </a>
                </div>

                <div className="social-icon">
                  <a href="https://linkedin.com/in/oluwadurotimi-a">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex  md:w-1/2  justify-center">
            {/* blob */}
            <div
              className="absolute left-0 bottom-[-20%] w-80 h-80 bg-primaryColorLight mix-blend-screen
                rounded-full blur-[150px] opacity-50"
            ></div>

            <img
              src={Bond}
              alt="person"
              className="my-10 md:w-full lg:max-w-[50%] duration-300 
              origin-center rotate-[4.5deg] border-2 border-primaryColor rounded-[38px]
              hover:rotate-0 hover:border-primaryColorLight"
            />
          </div>
        </div>

        {/* Hero Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
          <div className="flex items-center gap-3">
            <p className="text-5xl lg:text-6xl font-bold">3+</p>
            <p>
              Years of <br /> Experience
            </p>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-5xl lg:text-6xl  font-bold">20+</p>
            <p>
              Project <br /> Completed
            </p>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-5xl lg:text-6xl  font-bold">100k</p>
            <p>
              Happy <br /> Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
