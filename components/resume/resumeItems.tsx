import { IResumeItem } from "./IResumeItem";

export const resumeItems: IResumeItem[] = [
  {
    name: "📚 Education",
    id: "education",
    x: 250,
    y: 100,
    items: [
      {
        title: "Master of Science from the University of Warwick",
        where: "Coventry, UK",
        when: "Sep 2019 - Aug 2020",
        description: "MSc in Behavioural and Data Science",
        detailList: [
          "Graduated with distinction",
          "Dissertation project: Use machine learning (sentiment analysis and topic modelling) to understand the brain of Vincent Van Gogh through his letters and paintings",
        ],
      },
      {
        title: "Undergraduate from the University of Rochester",
        when: "Sep 2014 - May 2018",
        where: "Rochester, NY, USA",
        description:
          "Double Major in Psychology and Film & Media with a cluster in Computer Science",
        detailList: [
          "President of the Undergraduate Film Council & Personnel Director of the Cinema Group",
          "Courses taken include Advanced Front-end Web Development, Android Development, Introduction to the Arts of Programming (Python), Database Systems, Psychology of Consumerism",
        ],
      },
    ],
  },
  {
    name: "💻 Professional Experience in Software Engineering",
    id: "work-dev",
    x: 120,
    y: 200,
    items: [
      {
        title: "Full-Stack Software Engineer",
        when: "Nov 2020 - Nov 2021",
        where: "London, UK",
        description:
          "Worked remotely on a small team of developers to build a web application for clients in the financial services industry",
        detailList: [
          "This experience taught me how to write 'clean' code that is easy to understand and maintain",
          "This experience taught me about agile development workflows",
          "This experience taught me about the importance of Test Driven Development and Continuous Integration",
          "This experience strengthened my TypeScript, NodeJS, HTML, CSS, & unit and integration testing skills",
        ],
      },
      {
        title:
          "Public Health Officer & Software Developer at the Department of Mental Health, Government of Thailand",
        when: "Aug 2018 - Aug 2019",
        where: "Bangkok, Thailand",
        description: "Full-stack development of internal web applications",
        detailList: [
          "Initiated new web application projects from scratch",
          "This experience taught me how to communicate requirements and outcomes with non-technical stakeholders",
          "This experience strengthened my HTML, CSS, JavaScript (React), PHP, & NodeJS skills",
        ],
      },
      {
        title: "Part-time Teaching Assistant at the University of Rochester",
        where: "Rochester, NY, USA",
        when: "Jan 2018 - May 2018",
        description: "CSC 174: Advanced front-end web development",
        detailList: [
          "This experience strengthened my HTML, CSS, Plain JavaScript, & PHP skills",
        ],
      },
    ],
  },
  {
    name: "🧠 Professional Experience in Behavioural Data Science",
    id: "work-data",
    x: 600,
    y: 260,
    items: [
      {
        title: "Behavioural Data Scientist at Cowry",
        when: "Nov 2021 - Present",
        where: "London, UK",
        description:
          "Use data science to gain behavioural insights and build Cowry's unique database of commercial work, the Behavioural Fingerprint",
        detailList: [
          "This experience taught me about various behavioural data science techniques",
          "This experience taught me about various behavioural experimental design techniques",
          "This experience taught me about how to initiate and manage a new data science project",
        ],
      },
    ],
  },
  {
    name: "🍳 Software Projects",
    id: "dev-projects",
    x: 350,
    y: 350,
    items: [
      {
        link: "https://www.npmjs.com/package/fully-linked",
        title: "FullyLinked",
        when: "Nov 2021 - Present",
        description:
          "A JavaScript library written in TypeScript for building directed acyclic graphs using HTML elements",
        detailList: [
          "This experience has taught me how to publish my own open-source projects to NPM",
          "This experience has taught me how to maintain an open-source project",
        ],
      },
      {
        title: "Turboflow",
        when: "Nov 2021 - Present",
        link: "https://turboflow.vercel.app/",
        description:
          "A web application for building automated research pipelines using Directed Acyclic Graphs (DAGs)",
        detailList: [
          "This project has taught me how to build a server-side rendered (SSR) single-page web application use TypeScript (NextJS), Go, Docker, and Google Cloud Platform",
          "This project has led to the development of FullyLinked, a JavaScript library for building directed acyclic graphs using HTML elements",
        ],
      },
      {
        title: "Visspot.com",
        when: "Jan 2020 - Dec 2020",
        description:
          "A website for visualising data without writing a single line of code",
        detailList: [
          "This experience stregthened my JavaScript (React), HTML, CSS skills",
          "This experience introduced me to Google Cloud Platform, which massively reduced my development time",
          "This experience strengthened my UX design skills",
        ],
      },
    ],
  },
  {
    name: "🍳 What I'm good at",
    id: "skills",
    x: 120,
    y: 450,
    items: [
      {
        title: "Full-Stack Web Development",
        description:
          "Using React, NextJS, Jest, React Testing Library, NodeJS, HTML, CSS, Docker, Google Cloud Platform",
        detailList: [
          "2 years building web applications for a company and a government organisation",
          "5+ years building personal web applications",
          "I value maintainability, testability, and scalability",
          "I prefer TypeScript over plain JavaScript",
        ],
      },
      {
        title: "Behavioural Data Science and Data Engineering",
        description: "Using Python, R, SQL, Google Cloud Platform",
        detailList: [
          "I can use machine learning to gain behavioural insights",
          "I can start and manage a data science project from scratch",
          "I can communicate requirements and outcomes with non-technical stakeholders",
        ],
      },
      {
        title: "Video production",
        description:
          "Includes Digital Video Production, Photography, and Editing",
        detailList: ["I can produce and edit videos for a variety of projects"],
      },
    ],
  },
  {
    name: "💾 View my Résumé",
    id: "download-view",
    x: 30,
    y: 550,
  },
];
