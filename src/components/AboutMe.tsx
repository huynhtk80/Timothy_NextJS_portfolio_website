import React from "react";
import Image from "next/image";
import profileImg from "../../public/profileImage.jpeg";
import techIcons from "../../public/techIcons/techIcons";

function AboutMe() {
  return (
    <section
      id="aboutMe"
      className="flex flex-col justify-center items-center min-h-screen bg-blue-500 p-3"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="max-w-xs md:max-w-md">
          <Image
            src={profileImg}
            alt="tim profile image"
            className=" rounded-full"
          ></Image>
        </div>
        <div>
          <div className="font-bold text-xl">About Me</div>
          <div className="text-lg max-w-lg">
            Timothy has spent over 13 years working with people and evaluating
            how they interact with technological innovation. With a degree in
            Kinesiology and a diploma in Mechanical Engineering Technology,
            Timothy brings a unique perspective to every project. He enjoys
            helping others and bringing their visions to life. His goal after
            the project is to join fast moving company as a full stack developer
            with the opportunity to grow into a technical lead or project
            manager.
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold text-center mt-10">Tech Stack</h2>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 justify-center items-center gap-3">
          {Object.entries(techIcons).map(([key, value], index) => (
            <div
              key={key}
              className="flex flex-col justify-center items-center text-xs hover:scale-105"
            >
              <Image
                src={value}
                alt="tim profile image"
                className="h-20 w-20  "
              ></Image>
              <p className=" mt-1 bg-slate-600 text-white py-0.5 px-1 rounded-md">
                {key}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
