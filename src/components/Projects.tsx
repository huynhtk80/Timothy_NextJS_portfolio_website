import React from "react";
import Image from "next/image";
import potluckerMain from "../../public/potlucker_1_30.png";
import potluckerSub from "../../public/potluckerhome_30.png";
import ALNMain from "../../public/africalivenetwork.png";
import ALNSub from "../../public/africalivenetworkvid_30.png";
import techIcons from "../../public/techIcons/techIcons";
import { AiFillGithub } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";

const projects = [
  {
    project: "AfricaLiveNetwork.tv",
    description:
      "ALN is a streaming platform that focuses on bringing clarity to African culture to help drive investment and business interest. Key features provided ALN with the ability to curate, upload, store, and stream video content. Users can not only find and view video content of interest but can find and engage with other users.",
    link: "https://africalivenetwork.tv/",
    github: "https://github.com/huynhtk80/Project_3_ALN_Frontend",
    mainImg: ALNMain,
    subImg: ALNSub,
    techStack: [
      techIcons.reactjs,
      techIcons.js,
      techIcons.typescript,
      techIcons.css,
      techIcons.html5,
      techIcons.tailwind,
      techIcons.firebase,
    ],
  },
  {
    project: "Potlucker",
    description:
      "A full stack project aimed to address the challenges of planning a potluck for organizers and participants. Organizers can create events and Participants can select what to bring while having access to 3rd-party recipe APIs to generate food suggestions.",
    link: "https://potlucker.ca",
    github: "https://github.com/huynhtk80/project_2_potluckers_server",
    mainImg: potluckerMain,
    subImg: potluckerSub,
    techStack: [
      techIcons.reactjs,
      techIcons.js,
      techIcons.css,
      techIcons.html5,
      techIcons.postman,
      techIcons.expressJs,
      techIcons.mongodb,
    ],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center h-fit py-20 bg-slate-700"
    >
      <h1 className="text-2xl font-bold text-center mb-5">Recent Projects</h1>
      <div className="flex justify-center gap-5 flex-wrap">
        {projects.map((proj) => (
          <div
            key={proj.project}
            className=" max-w-sm shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-500 flex flex-col justify-between bg-slate-200 text-slate-800"
          >
            {/* cardcontent */}
            <div>
              {/* header */}
              <div className="relative h-[206px] overflow-hidden object-contain">
                <figure>
                  <Image
                    src={proj.mainImg}
                    alt="tim profile image"
                    className=""
                  ></Image>
                </figure>
                <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-black via-transparent"></div>
                <a href={proj.link}>
                  <h2 className="absolute bottom-3 left-2 text-white font-bold hover:scale-105 transition-all duration-300">
                    {proj.project}
                  </h2>
                </a>
              </div>
              {/* body */}
              <div className="relative flex flex-col justify-between p-2">
                {/* Stack */}
                <div className="flex justify-start gap-1">
                  {proj.techStack.map((icon, index) => (
                    <Image
                      src={icon}
                      alt={"teckIcon" + index}
                      className="h-10 w-10"
                      key={"teckIcon" + index}
                    ></Image>
                  ))}
                </div>
                <div>
                  <span className="font-bold">Description:</span>{" "}
                  {proj.description}
                </div>
              </div>
            </div>
            {/* actions */}
            <div className="flex justify-end items-end gap-3 p-3">
              <a href={proj.github}>
                <AiFillGithub size={32} />
              </a>
              <a href={proj.link}>
                <RiPagesLine size={32} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
