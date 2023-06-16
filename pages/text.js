import { DM_Sans } from "next/font/google";

export const WorksDetail = [
  {
    place: "Huawei",
    caption: "Front-end Developer (Full-time)",
    duration: "October 2021 – Present",
    desc: (
      <p>
        Developed, maintained, also improved web apps for XL AXIATA with the aim
        to be a Service Operation Center. The information provided is displayed
        in the form of various types of charts, maps, and tables containing data
        needed by clients with high positions in the company. In this project I
        help to develop the web-base app using React JS and Fusion Chart as a
        data visualization.
      </p>
    ),
    tools: ["React JS", "Javascript", "Fusion Charts"],
  },
  {
    place: "Sama",
    caption: "Front-end Developer & UI/UX Designer (Freelance) ",
    duration: "July 2022 – February 2023",
    desc: (
      <p>
        {" "}
        Collaborated with other team to built several apps such as point of
        sales application, learning platform, and waste management and recycling
        apps.
        <ul>
          <li>
            Helping Designed User Interfaces for Oil Mart (Point of sales and
            cashier app){" "}
          </li>
          <li>
            Helping Designed User Interfaces also developed landing page and web
            applications for MasukBersama (learning platform) using Next JS and
            Tailwind CSS{" "}
          </li>
          <li>
            Helping Designed User Interfaces also developed landing page and web
            applications for DALANG (Waste management and recycling apps) using
            React JS.
          </li>
        </ul>{" "}
      </p>
    ),
    tools: ["Next JS", "Tailwind CSS", "Javascript", "Figma"],
  },
  {
    place: "Ourinvitation.id",
    caption: "Front-end Developer (Freelance)",
    duration: "September 2021 – February 2022",
    desc: (
      <p>
        Helping team to developed A web-based online wedding invitation
        application using Atomic Design. Also, helping the team migrate apps
        from CRA & SCSS to Next JS & Tailwind because the needs of server side
        feature of Next JS. Developed landing page and over 3 themes of wedding
        invitation that was designed by UI/UX team.
      </p>
    ),
    tools: ["React JS", "Next JS", "SCSS", "Tailwind CSS"],
  },
  {
    place: "Qtasnim",
    caption: "Front-end Developer (Part-time)",
    duration: "October 2021 – December 2021",
    desc: (
      <p>
        Collaborated with another team from another company to develop and
        maintain major features of Biro Klasifikasi Indonesia (BKI) dashboard
        web apps.
      </p>
    ),
    tools: ["React JS", "Formik"],
  },
  {
    place: "Bigio",
    caption: "Front-end Developer (Internship)",
    duration: "July 2020 – October 2020",
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
      <a className={dmsans.className}>
        <span className={dmsans_bold.className} style={{ fontSize: 30 }}>
          Oil Mart
        </span>{" "}
        <br></br>
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
    image: "/images/xl.webp",
    tools: ["React JS", "Fusion Chart"],
    caption: (
      <a className={dmsans.className}>
        <span className={dmsans_bold.className} style={{ fontSize: 30 }}>
          XL Axiata PMT/CMT
        </span>{" "}
        <br></br>
        <br></br>
        XL AXIATA PMT/CMT is a web-based application built with the aim to be a
        Service Operation Center. The information provided is displayed in the
        form of various types of charts, maps, and tables containing data needed
        by clients with high positions in the company. <br></br>
        <br></br>
        In this project I help to develop the web-base app using React JS and
        Fusion Chart as a data visualization.
      </a>
    ),
  },
  {
    image: "/images/masukbersama_exam.webp",
    tools: ["Figma", "Next JS", "Tailwind CSS"],
    caption: (
      <a className={dmsans.className}>
        <span className={dmsans_bold.className} style={{ fontSize: 30 }}>
          MasukBersama
        </span>{" "}
        <br></br>
        <br></br>
        Masukbersama is a dual platform application (mobile and website based
        application), which was built with the aim of helping high school
        students to test their competence before taking the college entrance
        test. <br></br>
        <br></br>
        In this project I help to develop the web-base app using Next JS and
        Tailwind CSS, also designing the user interface of the application.
      </a>
    ),
    open: "https://masukbersama.vercel.app",
  },
  //   {
  //     image: "/images/masukbersama_landingpage.webp",
  //     tools: ["Figma", "Next JS", "Tailwind CSS"],
  //     caption: (
  //       <a className={dmsans.className}>
  //         <span className={dmsans_bold.className} style={{ fontSize: 30 }}>
  //           MasukBersama Landing Page
  //         </span>{" "}
  //         <br></br>
  //         <br></br>
  //         Masukbersama is a dual platform application (mobile and website based
  //         application), which was built with the aim of helping high school
  //         students to test their competence before taking the college entrance
  //         test. <br></br>
  //         <br></br>
  //         In this project I help to develop the web-base app using Next JS and
  //         Tailwind CSS, also designing the user interface of the application.
  //       </a>
  //     ),
  //   },
  {
    image: "/images/sama_landingpage.webp",
    tools: ["Figma", "Next JS", "Tailwind CSS"],
    caption: (
      <a className={dmsans.className}>
        <span className={dmsans_bold.className} style={{ fontSize: 30 }}>
          Sama Landing Page
        </span>{" "}
        <br></br>
        <br></br>A single web page to elevate brand awareness of the growing
        software house by showing information like our portfolio. Other that
        this landing page is built to generate call-to-action from customer to
        use our services.<br></br>
        <br></br>
        In this project i&apos;m helping team to develop and design the User
        Interface of the application.
      </a>
    ),
    open: "https://samabandung.vercel.app",
  },
  //   {
  //     image: "/images/dalang.webp",
  //     tools: ["Figma", "React JS"],
  //     caption: (
  //       <a className={dmsans.className}>
  //         <span className={dmsans_bold.className} style={{ fontSize: 30 }}>
  //           Dalang
  //         </span> <br></br>
  //         <br></br>
  //         Oil Mart is a device application (Tab only) built to support cashier
  //         work and find out the point of sales of a shop that sells various types
  //         of oil. The application is made as easy and smart as possible. <br></br>
  //         <br></br>
  //         In this project I help to design the User Interface and design concept
  //         of the application.
  //       </a>
  //     ),
  //   },
  {
    image: "/images/ourinvitation.webp",
    tools: ["React JS", "SCSS", "Next JS", "Tailwind CSS"],
    caption: (
      <a className={dmsans.className}>
        <span className={dmsans_bold.className} style={{ fontSize: 30 }}>
          Ourinvitation.id
        </span>{" "}
        <br></br>
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
      <a className={dmsans.className}>
        <span className={dmsans_bold.className} style={{ fontSize: 30 }}>
          myBKI
        </span>{" "}
        <br></br>
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
    image: "/images/mubarokulhuda.webp",
    tools: ["Figma", "React JS"],
    caption: (
      <a className={dmsans.className}>
        <span className={dmsans_bold.className} style={{ fontSize: 30 }}>
          SPP Mubarokulhuda
        </span>{" "}
        <br></br>
        <br></br>
        SM (Spp Mubarokulhuda) is a cross-platform application created to help
        parents and the administration of the Madrasah Mubarokulhuda make
        payments and record tuition. The features of this application include
        manual tuition payments and bank transfers, arrears reports, financial
        reports, and recap of tuition payments. <br></br>
        <br></br>
        In this project I help to develop the web-base app using React JS also
        designing the User Interfaces of the website and mobile app.
      </a>
    ),
    open: "https://sppmubarokulhuda.netlify.app",
  },
];

const dmsans_bold = DM_Sans({
  weight: "700",
  subsets: ["latin"],
});

const dmsans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});
