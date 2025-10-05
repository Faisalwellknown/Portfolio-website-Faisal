

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Faisal Shaikh",
  title: "Hi all, I'm Faisal Irfan Shaikh",
  subTitle: emoji(
    "A versatile Computer Science student and passionate Software Developer with experience building full-stack web applications with the MERN stack (MongoDB, Express.js, React.js, Node.js) , native Android apps with Java , and data science models using Python, TensorFlow, and PyTorch. Adept at working in both independent and team environments  to deliver high-quality software solutions"
  ),
  resumeLink:
    "https://drive.google.com/file/d/19B-hsWszxWBeiZZANWHGS14_eHI9GCI3/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Faisalwellknown",
  linkedin: "https://www.linkedin.com/in/faisal-shaikh-374374223/",
  gmail: "faisalshaikhikjf@gmail.com",
  facebook: "https://www.instagram.com/faisal_shaikh_ikjf",
  medium: "https://medium.com/@faisalshaikhikjf",
  Instagram: "https://www.instagram.com/faisal_shaikh_ikjf",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A PASSIONATE SOFTWARE DEVELOPER FOCUSED ON FULL STACK WEB, ANDROID, AND DATA-DRIVEN APPLICATIONS ",
  skills: [
    emoji(
      "⚡ Build scalable, full-stack web applications using the MERN stack (React.js, Node.js, Express.js, MongoDB)"
    ),
    emoji("⚡ Develop native Android applications using Java, integrating cloud services like Firebase for authentication and databases"),
    emoji(
      "⚡ Leverage Python with TensorFlow and PyTorch to create and evaluate machine learning models for tasks like hate speech detection and text-to-image generation"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "MIT World Peace University (MIT-WPU), Kothrud, Pune",
      logo: require("./assets/images/MITWPU.jpg"),
      subHeader: "B.Tech Computer Science and Engineering",
      duration: "2023-2026 (Present)",
      desc: "Completing a broad curriculum with hands-on projects and a capstone.",
      descBullets: [
        "Covers fundamental topics like programming, data structures, algorithms, software engineering, databases, and operating systems.",
        "Includes specialized fields such as cloud computing, artificial intelligence (AI), machine learning (ML), and cybersecurity."
      ]
    },
    {
      schoolName: "Trinity Polytechnic, Pune",
      logo: require("./assets/images/Trinitypoly.png"),
      subHeader: "Diploma in Computer Science and Engineering (CSE)",
      duration: "2021-2023",
      desc: "Graduated with First Class (Distinction).",
      
    },
    {
      schoolName: "J.K. College",
      logo: require("./assets/images/JKcollege.jpeg"),
      subHeader: "12th class Science",
      duration: "2020-2021",
      desc: "Completed with a final score of 84.17%.",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "40%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Web Development",
      company: "Krutanic",
      companylogo: require("./assets/images/Krutaniclogo.jpg"),
      date: "20th June 2025 - present",
      desc: "Working on real-time web applications as part of the Full Stack Web Development team.",
      descBullets: [
        "Gained practical experience with modern frontend and backend technologies.",
      "Participated in agile development cycles, contributing to both client-side and server-side modules."
      ]
    },
    {
      role: "Android Developer",
      company: "UEF EdTech Pvt. Ltd",
      companylogo: require("./assets/images/UEFlogo.jpeg"),
      date: "01st July - 14th Aug 2022",
      desc: "Completed a 6-week professional android development internship with an outstanding performance."
    },
   
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      image: require("./assets/images/Twitter-hate log.jpeg"),
      projectName: "Tweeter-Hate-Speech-detection",
      projectDesc: "This project implements a machine learning model using BERT (Bidirectional Encoder Representations from Transformers) to detect hate speech in tweets. The model is trained on a labeled dataset and provides a classification of tweets into hate, offensive, or neutral categories.",
      footerLink: [
        {
          name: "Visit Git Hub",
          url: "https://github.com/Faisalwellknown/Tweeter-Hate-Speech-detection"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Androidportfolieapp.png"),
      projectName: "Portfolio Android App",
      projectDesc: "An Android multi-page portfolio application with OTP login, real-time Firebase integration, and Razorpay payment gateway support.  ",
      
      
      footerLink: [
        {
          name: "Visit Video Demo",
          url: "https://drive.google.com/file/d/12W9bHVYAUM-1C7nvZztR2H6fwUhkGONb/view?usp=sharing"
          
        }
      ]
    }
      ,
    {
      image: require("./assets/images/Joblanelogo.png"),
      projectName: "JobLane – Job Recruitment Platform",
      projectDesc: "JobLane is a full-stack web application for streamlined job recruitment. It offers user role management, job applications, profile building, and powerful search/filter options for candidates, recruiters, and admins.",
      
      
      footerLink: [
        {
          name: "Visit Git Hub",
          url: "https://github.com/Faisalwellknown/JobsLane_job_search_website"
          
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Professional Android Development",
      subtitle:
        "Completed a 6-week professional Android development internship with UEF EdTech Pvt. Ltd.",
      image: require("./assets/images/Androidindustrialcirtificate.png"),
      imageAlt: " Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1qgruiXyYETgvtkdiQX-bLwoMDHk7QS_0/view?usp=sharing"
        }
       
      ]
    },
    {
      title: "Data Science",
      subtitle:
        "Completed a 3-month Data Science program by SmartED in collaboration with Microsoft.",
      image: require("./assets/images/Data science Cirtificate.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1SHb2tpt9NyfWOJ-PhLzGrW2JScvMxhJk/view?usp=sharing"
        }
      ]
    },

    {
      title: "HackMITWPU'25 Ideathon",
      subtitle: "Received certification for participation in the HackMITWPU'25 Ideathon.",
      image: require("./assets/images/Ideathoncirtificate.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1PEKdQDfITslJiAHpI4HnY3edV2hIB5ga/view?usp=sharing"}
        
      ]
    }
    ,
    {
      title: "Adobe India Hackathon",
      subtitle: "Received certification for participation in the Adobe ",  
      image: require("./assets/images/Adobecirtificate.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1sxskTXsD1olErfv0MIkmIctRPz2OwcaI/view?usp=sharing"}
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@faisalshaikhikjf",
     
    
    },
    {
      url: "https://medium.com/@faisalshaikhikjf",
      
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://www.canva.com/design/DAG0qS-1a8Q/8RQgQYdgSC-TZseFLaGMaw/edit?utm_content=DAG0qS-1a8Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      event_url: "https://www.linkedin.com/in/faisal-shaikh-374374223/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://www.linkedin.com/in/faisal-shaikh-374374223/"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9359899134",
  email_address: "faisalshaikhikjf@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
