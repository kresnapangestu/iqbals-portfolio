import { useEffect, useState } from "react";
import { diffInYearsMonths } from "../helpers";

export const WorksDetail = [
  {
    place: "Huawei",
    caption: "Front-end Developer (Full-time)",

    duration: "October 2021 – Present",
    realDuration: diffInYearsMonths("October 2021"),
    desc: (
      <ul>
        <li>
          Revamped and maintained large-scale web applications for XL Axiata’s
          transformation into XLSMART, significantly improving user experience
          and operational visibility for the Service Operation Center.
        </li>
        <li>
          Led the migration of mission-critical legacy modules to a modern stack
          (Next.js, Tailwind CSS) under the XLMS initiative, resulting in an
          ~50% reduction in development time, ~20% faster load speeds, and
          significantly improved code maintainability.
        </li>
        <li>
          Supported legacy React.js applications handling real-time reporting
          and analytics, ensuring zero disruption during modernization efforts.
        </li>
        <li>
          Built an executive dashboard using Next.js, FusionCharts, Tailwind
          CSS, and Material UI, enabling real-time monitoring of KPIs and
          service performance by C-level stakeholders.
        </li>
        <li>
          Designed and implemented dynamic data visualizations (charts, tables,
          maps) using Recharts and FusionCharts, improving clarity and insight
          delivery for over 500+ daily users.
        </li>
        <li>
          Applied Atomic Design + modular architecture, increasing UI component
          reusability and reducing development time by ~30%.
        </li>
        <li>
          Leveraged React Context API and dynamic URL parameters to enable
          seamless state management and filtered data views across dashboards.
        </li>

        <li>
          {" "}
          Developed and maintained over 40 data dashboards for
          telecommunications user analytics, optimizing data visualization and
          reporting efficiency. Collaborated with cross-functional teams to
          ensure accuracy, scalability, and seamless integration with existing
          systems, enhancing decision-making processes and user experience.
        </li>
      </ul>
    ),
    tools: [
      "React JS",
      "Next JS",
      "Tailwind CSS",
      "Material UI",
      "Fusion Charts",
    ],
  },
  {
    place: "STARA",
    caption: "Front-end Developer (Part-time)",

    duration: "July 2023 – July 2024",
    realDuration: diffInYearsMonths("July 2023", "July 2024"),
    desc: (
      <p>
        Created a web application for Enduser and Internal Badan Pengelolaan
        Lingkungan Hidup (BPLDH) to streamline funding requests and verify
        stakeholder submissions, ensuring efficient allocation of resources.
        Utilizing React JS and implementing Atomic Design.
        <br></br>
        <ul>
          <li>
            Developed user-centric features to enhance the experience of
            external BPLDH users.
          </li>
          <li>
            Developed and maintained internal tools for efficient workflow
            management for Internal BPLDH.
          </li>
        </ul>
      </p>
    ),
    tools: ["React JS", "React Hook Form"],
  },
  {
    place: "STARA",
    caption: "Front-end Developer (Part Time) ",

    duration: "2023 – 2024",
    realDuration: diffInYearsMonths("June 2023", "July 2024"),
    desc: (
      <p>
        {" "}
        BPLDH (Badan Pengelola Dana Lingkungan Hidup) Management System web
        application was developed to streamline funding requests and facilitate
        the verification of stakeholder submissions. These applications
        significantly enhanced resource allocation efficiency and operational
        effectiveness. In this project, I contributed to the development of both
        back-office and client-facing applications as front-end developer,
        ensuring seamless functionality and improved user experience.
      </p>
    ),
    tools: ["Next JS", "Tailwind CSS", "Javascript", "Figma"],
  },
  {
    place: "Qtasnim",
    caption: "Front-end Developer (Part-time)",

    duration: "October 2021 – December 2021",
    realDuration: diffInYearsMonths("October 2021", "December 2021"),
    desc: (
      <p>
        <ul>
          <li>
            Developed and Maintained Major Features for Biro Klasifikasi
            Indonesia (BKI) Web Apps
          </li>
          <li>
            Implemented responsive and user-friendly interfaces using React JS
            and Material UI.
          </li>
          <li>
            Successfully collaborated with an external team from another company
            to deliver critical features for BKI
          </li>
          web apps, enhancing functionality and user experience.
          <li>
            Utilized React JS, Formik, and Material UI to develop responsive,
            accessible, and visually appealing web interfaces.
          </li>
          <li>
            Participated in a role to maintain high code quality through
            diligent reviews and adherence to best practices.
          </li>
        </ul>
      </p>
    ),
    tools: ["React JS", "Formik"],
  },
  {
    place: "BIGIO",
    caption: "Front-end Developer (Internship)",

    duration: "July 2020 – October 2020",
    realDuration: diffInYearsMonths("July 2020", "October 2020"),
    desc: (
      <p>
        Learning by Developing BIG Audit Trail Web apps. a web apps can record
        in detail and details about activities and events that occur in computer
        systems or business processes. This includes recording all actions,
        changes, or transactions performed by a user or system, including the
        time, date, and identity of the associated user. Also helping team to
        win the BIG Hackathon by developing BUSAMI (a mobile based app).
      </p>
    ),
    tools: ["Laravel", "Bootstrap"],
  },
];

export const ProjectList = [
  {
    image: "/images/oilmart.webp",
    tools: ["Figma"],
    caption: (
      <a>
        <span style={{ fontSize: 28 }}>Oil Mart</span> <br></br>
        <br></br>
        Oil Mart is a device application (Tab only) built to support cashier
        work and find out the point of sales of a shop that sells various types
        of oil. The application is made as easy and smart as possible. <br></br>
        <br></br>
        In this project I help to design the User Interface and design concept
        of the application.
      </a>
    ),
    open: "https://drive.google.com/file/d/1zeSySQ1aKT8vQZHqWFRmqRJuQ-MGmvT4/view?usp=sharing",
  },
  {
    image: "/images/ui-pmt-cmt.webp",
    tools: ["React JS", "Fusion Chart"],
    caption: (
      <a>
        <span style={{ fontSize: 28 }}>XLSmart PMT/CMT</span> <br></br>
        <br></br>
        XLSmart PMT/CMT is a web-based application built with the aim to be a
        Service Operation Center. The information provided is displayed in the
        form of various types of charts, maps, and tables containing data needed
        by clients with high positions in the company. <br></br>
        <br></br>
        In this project I help to develop the web-base app using React JS and
        Fusion Chart as a data visualization.
      </a>
    ),
  },
  // {
  //   image: "/images/masukbersama_exam.webp",
  //   tools: ["Figma", "Next JS", "Tailwind CSS"],
  //   caption: (
  //     <a>
  //       <span style={{ fontSize: 28 }}>MasukBersama</span> <br></br>
  //       <br></br>
  //       Masukbersama is a dual platform application (mobile and website based
  //       application), which was built with the aim of helping high school
  //       students to test their competence before taking the college entrance
  //       test. <br></br>
  //       <br></br>
  //       In this project I help to develop the web-base app using Next JS and
  //       Tailwind CSS, also designing the user interface of the application.
  //     </a>
  //   ),
  //   open: "https://masukbersama.vercel.app",
  // },
  {
    image: "/images/bpdlh.webp",
    tools: ["React", "Identity Server", "React-hook-form", "Redux"],
    caption: (
      <a>
        <span style={{ fontSize: 28 }}>Sama Landing Page</span> <br></br>
        <br></br>BPLDH (Badan Pengelola Dana Lingkungan Hidup) Management System
        web application was developed to streamline funding requests and
        facilitate the verification of stakeholder submissions. These
        applications significantly enhanced resource allocation efficiency and
        operational effectiveness. In this project, I contributed to the
        development of both back-office and client-facing applications as
        front-end developer, ensuring seamless functionality and improved user
        experience.<br></br>
      </a>
    ),
  },
  {
    image: "/images/ourinvitation.webp",
    tools: ["React JS", "SCSS", "Next JS", "Tailwind CSS"],
    caption: (
      <a>
        <span style={{ fontSize: 28 }}>Ourinvitation.id</span> <br></br>
        <br></br>
        OurInvitation is an online invitation application created with the aim
        of providing a cheaper, more efficient, and environmentally friendly
        alternative of the wedding invitations. <br></br>
        <br></br>
        In this project I help to migrate the application from React JS & SCSS
        to Next JS & Tailwind CSS, Page that i developed are Landing Page and 3
        invitation themes.
      </a>
    ),
    open: "https://ourinvitation.id",
  },
  {
    image: "/images/bki.webp",
    tools: ["React JS", "Formik"],
    caption: (
      <a>
        <span style={{ fontSize: 28 }}>myBKI</span> <br></br>
        <br></br>
        myBKI is a web-based application built with the aim to be a Service
        Operation Center. The information provided is displayed in the form of
        various types of charts, maps, and tables containing data needed by
        clients with high positions in the company. <br></br>
        <br></br>
        In this project I help to develop the web-base app using React JS and
        Formik for building and processing form data
      </a>
    ),
  },
  {
    image: "/images/next-pmt-cmt.webp",
    tools: ["Next JS", "Zustand", "Recharts", "Leaflet"],
    caption: (
      <a>
        <span style={{ fontSize: 28 }}>Next PMT-CMT</span> <br></br>
        <br></br>
        Developed a centralized web-based monitoring dashboard for **XLSMART**
        to provide real-time visibility into nationwide telecommunications
        network performance across **National, Provincial, City, and District**
        levels. Designed for **Network Operations Center (NOC)** big-screen
        displays, the platform enables operators to continuously monitor
        critical Telco APIs, identify network issues quickly, and support
        operational decision-making. The dashboard also consolidates and
        preserves essential monitoring views previously available in the legacy
        **XLSMART PMT-CMT** system, providing a modern, scalable, and unified
        monitoring experience.
      </a>
    ),
  },
  {
    image: "/images/mubarokulhuda.webp",
    tools: ["Figma", "React JS"],
    caption: (
      <a>
        <span style={{ fontSize: 28 }}>SPP Mubarokulhuda</span> <br></br>
        <br></br>
        SM (Spp Mubarokulhuda) is a cross-platform application created to help
        parents and the administration of the Madrasah Mubarokulhuda. The
        features of this application include manual tuition payments and bank
        transfers, arrears reports, financial reports, and recap of tuition
        payments. <br></br>
        <br></br>
        In this project I help to develop the web-base app using React JS also
        designing the User Interfaces of the website and mobile app.
      </a>
    ),
    open: "https://sppmubarokulhuda.netlify.app",
  },
];
