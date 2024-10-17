/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vivek Khadse",
  description:
    "Crafting innovative solutions with .NET Core and React.js, leveraging microservices and Azure to drive impactful, scalable applications.",
  og: {
    title: "Vivek Khdase Portfolio",
    type: "website",
    url: "/",
  },
};

//Home Page
const greeting = {
  title: "Vivek Khadse",
  logo_name: "VivekKhadse",
  nickname: ".NET Fullstack developer",
  subTitle:
    "Crafting innovative solutions with .NET Core and React.js, leveraging microservices and Azure to drive impactful, scalable applications.",
  resumeLink:
    "https://drive.google.com/file/d/1pBqPlOlTmI1HW_kA5cc49wUqtFT2wHa0/view?usp=sharing",
  portfolio_repository: "https://github.com/ExternDev",
  githubProfile: "https://github.com/ExternDev",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ExternDev",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "www.linkedin.com/in/vivek-khadse-45045a190",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/TECHBYVIVEK",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:vkhadse.dev@gmai.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: ".NET Development",
      fileName: "DotNetImg",
      skills: [
        "⚡ Developing robust applications using .NET Core and ASP.NET",
        "⚡ Implementing RESTful APIs and integrating with third-party services",
        "⚡ Applying SOLID principles to enhance code quality and maintainability",
      ],
      softwareSkills: [
        {
          skillName: ".NET Core",
          fontAwesomeClassname: "logos-dotnet",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "logos-csharp",
          style: {
            color: "#239120",
          },
        },
        {
          skillName: "XUnit",
          fontAwesomeClassname: "simple-icons:unit-testing",
          style: {
            color: "#8D8D8D",
          },
        },
      ],
    },
    {
      title: "React Development",
      fileName: "ReactImg",
      skills: [
        "⚡ Building responsive user interfaces with React.js",
        "⚡ Managing application state with Redux for efficient data flow",
        "⚡ Integrating SignalR for real-time communication in applications",
      ],
      softwareSkills: [
        {
          skillName: "React.js",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "Fluent UI",
          fontAwesomeClassname: "simple-icons:fluent",
          style: {
            color: "#F25022",
          },
        },
      ],
    },
    {
      title: "Cloud Computing & Azure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Managing cloud infrastructure on Azure for scalable applications",
        "⚡ Utilizing Azure Functions for serverless computing and task automation",
        "⚡ Implementing CI/CD pipelines for seamless deployment processes",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Microservices Architecture",
      fileName: "MicroservicesImg",
      skills: [
        "⚡ Designing and deploying microservices using .NET Core",
        "⚡ Implementing message brokers like RabbitMQ for communication",
        "⚡ Ensuring system scalability and reliability through microservices patterns",
      ],
      softwareSkills: [
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: {
            color: "#FF6600",
          },
        },
        {
          skillName: "Azure Service Bus",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Event Sourcing",
          fontAwesomeClassname: "simple-icons:events",
          style: {
            color: "#F39C12",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/khadsevivek39/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Deogiri Institute of Engineering and Management Studies",
      subtitle: "B.Tech. in Computer Science",
      logo_path: "deogiri_logo.png", // Replace with actual logo path if available
      alt_name: "Deogiri Institute",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Studied core software engineering subjects like Data Structures, Algorithms, Database Management Systems, Operating Systems, and Artificial Intelligence.",
        "⚡ Completed specialized courses in Cloud Computing, Microservices Architecture, and Full Stack Development.",
        "⚡ Actively participated in various tech events and workshops, enhancing practical skills in software development.",
      ],
      website_link: "http://deogiri.edu.in", // Replace with actual website link if available
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Startup",
  description:
    "I have worked with many evolving startups as a Developer and Software Architect. I have also founded my own startup, where I led web and mobile application development. My journey has been a blend of hands-on technical work and leadership roles in building scalable solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "Aress Software and Educational Technologies",
          company_url: "https://www.aress.com/",
          logo_path: "aress_logo.png",
          duration: "June 2022 - Present",
          location: "Nashik",
          description:
            "Built a multi-tenant Engineering Document Management System from scratch using a microservices architecture. Had hands-on experience with Azure Functions for .NET Core. Developed an enterprise-level application using .NET Core Azure Functions and React.js.",
          color: "#0a67b5",
        },
      ],
    },
    {
      title: "Startup",
      work: true,
      experiences: [
        {
          title: "Founder & CEO",
          company: "ExternSoftwares.com",
          company_url: "https://www.externsoftwares.com/",
          logo_path: "externsoftwares_logo.png",
          duration: "2019 - 2022",
          location: "Remote",
          description:
            "Founded a service-based startup focused on developing web and mobile applications for various clients. Oversaw the development of scalable and efficient solutions tailored to client needs, providing end-to-end services including project management, product development, and deployment.",
          color: "#333333",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_vivek.png",
    description:
      "I am available on almost every social media. You can message me, and I will reply within 24 hours. I can help you with .NET, React, ML, AI, Cloud, and Mobile Development.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "I like to document some of my experiences in my professional career journey as well as some technical knowledge sharing.",
    // link: "https://blogs.externsoftwares.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Nashik, Maharashtra, India",
    locality: "Nashik",
    country: "India",
    region: "Maharashtra",
    postalCode: "422001",
    streetAddress: "Nashik City",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/xyz123",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 1234567890",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
