import React from "react";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";
import MongoDB from "../assets/mongo.png";

const Experience = () => {
  return (
    <section name='experience' className="container">
      <div className="flex flex-col items-center gap-5 text-center mb-5">
        <h2 className="subtitle">Essential Tools I Use</h2>
        <p className="max-w-2xl">
          Discover the powerfull tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5 md:gap-10 mt-10">
        <div className="skillCard">
          <div className="bg-primaryColor grid place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%]
          hover:grayscale-0 hover:bg-primaryColor  text-whiteColor border border-transparent hover:border-primaryColorLight">
            <img src={CSS} alt="" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
        </div>

        <div className="skillCard">
          <div className="bg-primaryColor grid place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%]
          hover:grayscale-0 hover:bg-primaryColor  text-whiteColor border border-transparent hover:border-primaryColorLight">
            <img src={Javascript} alt="" className="w-20 mx-auto" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
        </div>

        <div className="skillCard">
          <div className="bg-primaryColor grid place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%]
          hover:grayscale-0 hover:bg-primaryColor  text-whiteColor border border-transparent hover:border-primaryColorLight">
            <img src={ReactImg} alt="" className="w-20 mx-auto" />
            <p className="my-4">REACT</p>
          </div>
        </div>

        <div className="skillCard">
          <div className="bg-primaryColor grid place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%]
          hover:grayscale-0 hover:bg-primaryColor text-whiteColor border border-transparent hover:border-primaryColorLight">
            <img src={Node} alt="" className="w-20 mx-auto" />
            <p className="my-4">NODE.JS</p>
          </div>
        </div>

        <div className="skillCard">
          <div className="bg-primaryColor grid place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%]
          hover:grayscale-0 hover:bg-primaryColor text-whiteColor border border-transparent hover:border-primaryColorLight">
            <img src={Tailwind} alt="" className="w-20 mx-auto" />
            <p className="my-4">TAILWIND</p>
          </div>
        </div>
        
        <div className="skillCard">
          <div className="bg-primaryColor grid place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%]
          hover:grayscale-0 hover:bg-primaryColor text-whiteColor border border-transparent hover:border-primaryColorLight">
            <img src={MongoDB} alt="" className="w-20 mx-auto" />
            <p className="my-4">MONGODB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
