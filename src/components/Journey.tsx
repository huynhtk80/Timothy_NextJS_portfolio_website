import React from "react";

const experience = [
  {
    title: "Full Stack Developer",
    company: "InceptionU",
    date: "2023",
    description:
      "Project based learning completing Full Stack Application for real clients. Learning Technlogies including Javascript, Typescript, React, nodeJs, expressjs, mongodb, firebase, and more.",
    task: [""],
    type: "school",
  },
  {
    title: "Coordinator, Academic Applied Research Initiatives",
    company: "Southern Alberta Institute of Technology",
    date: "2018-2021",
    description:
      "Responsible for developing and implementing programs, policies and other services which encourage and facilitate innovation, applied research, skills and entrepreneurialism among Industry Partners, Faculty and Students",
    task: [
      "Responsible for developing and implementing programs, policies,and other services which encourage and facilitate innovation, applied research, skills,and entrepreneurialism among Industry Partners, Faculty,and Students.",
    ],
    type: "work",
  },
  {
    title: "Principal Investigator",
    company: "Southern Alberta Institute of Technology",
    date: "2014-2018",
    description:
      "Coordinated multiple concurrent applied research projects through all phases including project initiation, planning, execution, monitoring and control, and project closure.",
    task: [""],
    type: "work",
  },
  {
    title: "Mechanical Engineering Technology Diploma",
    company: "Southern Alberta Institute of Technology",
    date: "2012-2014",
    description:
      "Learned design, prototyping, testing, and how to get stuff built!",
    task: [""],
    type: "school",
  },
  {
    title: "Spinal Rehabilitation Specialist",
    company: "Synaptic",
    date: "2012-2013",
    description:
      "Partnered with a multidisciplinary team to develop and implement holistic treatment plans and exercise programs for clients living with chronic neurological conditions to support the maintenance of functional ability and mental health.",
    task: [""],
    type: "work",
  },
  {
    title: "Kinesiologist",
    company: "CBI Health",
    date: "2008-2011",
    description:
      "Assessed clients, developed rehabilitation exercise programs, and developed gradual return to work plans to manage the safe and timely return to work of clients after an accident or illness.",
    task: [""],
    type: "work",
  },
  {
    title: "Bachelor of Kinesiology, Major in Exercise and Health Physiology",
    company: "University of Calgary",
    date: "2004-2008",
    description:
      "The sciences of biomechanics, anatomy and physiology, and considers neuroscience and psychosocial factors of activity.",
    task: [""],
    type: "school",
  },
];

function Journey() {
  return (
    <section id="Journey" className="bg-gray-800 text-gray-100">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-400">
              <h3 className="text-3xl font-semibold">Journey</h3>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                Where the fun happens
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              {experience.map((exp) => (
                <div
                  key={exp.title}
                  className={
                    "flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-6 sm:before:h-6 sm:before:rounded-full sm:before:left-[-39px] sm:before:z-[1] before:bg-blue-400 sm:before:text-center " +
                    (exp.type === "school"
                      ? " sm:before:content-['S'] "
                      : " sm:before:content-['W'] ")
                  }
                >
                  <h3 className="text-xl font-semibold tracking-wide">
                    {exp.title}
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-400">
                    {exp.date} | {exp.company}
                  </time>
                  <p className="mt-3">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
