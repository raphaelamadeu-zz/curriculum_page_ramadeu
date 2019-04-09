import { Band } from './band.class';

export const BANDS: Band[] = [
  {
    anchor: "whoami",
    heading: "Who am I",
    content:
    "Raphael Soares Amadeu, 20, São Paulo - SP, Brazil \n\nI've been a Web Developer for nearly 4 years, being the last 2 years working at IBM Brazil as a Front-End Developer. \n \nI'm a very passionate student that is always looking for something new to learn, focused on Interactive Experiences through Web and Game Development. \n\nGraduated as a Digital Games technologist by FMU, I'm a very Creative person that is Cooperative and good at Team Work. \n\nCurrently, I'm studying System Development and Analysis at FATEC São Paulo.",
    img: "./assets/raphael.png",
    alt: "A picture of me",
    alternate: false,
    list: false,
    listContent: [],
    cta_active: true,
    ctas: [
      {
        text: "Do I have any Experience?",
        url: "#experience",
        type: "primary",
        external: false
      }
    ]
  },

  {
    anchor: "experience",
    heading: "Experience",
    content:
    "After working on several personal projects, I've been hired to work at IBM in 2017, as a Front-end Developer. \n\nMy work can be seen across many projects, some of them are: \nCloud, Security, Events and Analytics.\n\nOne highlight certainly would be the Web coverage of IBM Cloud Discovery 2018, the biggest IBM event on Brazil to this day.\n\nSkills and Technologies used:",
    img: "./assets/experience.jpeg",
    alt: "A picture of me",
    alternate: true,
    list: true,
    listContent: [
      'HTML 5', 'CSS3', 'JavaScript / ES6', 'Reative Web Frameworks: Angular and Vue', 'Agile Practices: Scrum and Kanban', 'Node.js', 'GitHub Versioning', 'Automated Testing and Web Scrapping using Puppeteer framework'
    ],
    cta_active: true,
    ctas: [
      {
        text: "What can I do?",
        url: "#skills",
        type: "primary",
        external: false
      },
      {
        text: "IBM Cloud Discovery Webpage",
        url: "https://www.ibm.com/events/br/pt/ibmclouddiscovery/",
        type: "secondary",
        external: true
      }
    ]
  },

  {
    anchor: "skills",
    heading: "Skills",
    content:
    "Some of the skills I've obtained are:",
    img: "./assets/education.png",
    alt: "A picture of me",
    alternate: false,
    list: true,
    listContent: [
      'Web Development: HTML5, CSS3 and JavaScript (ES6)',
      'Angular.js Development (This whole page is built on it)',
      'Vue.js Development',
      'Agile Practices: Scrum and Kanban',
      'RESTful API Consumption',
      'Node.js Development',
      'Mongo DB',
      'Express.js',
      'Automated Web Testing and Scrapping using Puppeteer API',
      'Git Versioning',
      'Mail Marketing Development',
      'Game Development using Unity 3D',
      'Basic Image manipulation using Photoshop',
      'Gamification routines'
    ],
    cta_active: true,
    ctas: [
      {
        text: "Visit my LinkedIn",
        url: "https://www.linkedin.com/in/raphaelsamadeu/",
        type: "primary",
        external: true
      },

      {
        text: "Send me an e-mail",
        url: "mailto:raphael.s.amadeu@gmail.com",
        type: "secondary",
        external: true
      },
    ]
  },
]
