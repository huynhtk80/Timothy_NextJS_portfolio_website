import React from "react";
import Image from "next/image";
import profileImg from "../../public/profileImage.jpeg";
import techIcons from "../../public/techIcons/techIcons";

function AboutMe() {
  return (
    <section
      id="aboutMe"
      className="flex flex-col justify-center items-center h-screen bg-blue-500 gap-10"
    >
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="max-w-md">
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
      <div className="flex flex-row">
        {Object.entries(techIcons).map(([key, value], index) => (
          <Image
            src={value}
            alt="tim profile image"
            className=" rounded-full"
            key={key}
          ></Image>
        ))}
      </div>
    </section>
  );
}

export default AboutMe;
