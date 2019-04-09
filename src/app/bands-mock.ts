import { Band } from './band.class';

export const BANDS: Band[] = [
  {
    anchor: "whoami",
    heading: "Who am I",
    content:
    "I've been a Web Developer nearly 4 years, being the last 2 years working to IBM Brazil as a Front-End Developer. \n \nI'm a very passionate student that is always looking for something new to learn, focused on Interactive Experiences through Web and Games Development. \n\nGraduated as a Digital Games technologist by FMU, I'm a very Creative persion that is Cooperative and good at Team Work.",
    img: "../assets/raphael.png",
    alt: "A picture of me",
    alternate: false,
    list: false,
    listContent: [],
    cta_active: true,
    ctas: [
      {
        text: "What can you do?",
        url: "#skills",
        type: "primary"
      }
    ]
  },

  {
    anchor: "skills",
    heading: "Skills",
    content:
    "I've been a Web Developer nearly 4 years, being the last 2 years working to IBM Brazil as a Front-End Developer. \n \nI'm a very passionate student that is always looking for something new to learn, focused on Interactive Experiences through Web and Games Development. \n\nGraduated as a Digital Games technologist by FMU, I'm a very Creative persion that is Cooperative and good at Team Work.",
    img: "../assets/skills.jpeg",
    alt: "A picture of me",
    alternate: true,
    list: true,
    listContent: [
      'HTML 5', 'CSS3'
    ],
    cta_active: true,
    ctas: [
      {
        text: "Falatu",
        url: "https://www.orkut.com",
        type: "secondary"
      }
    ]
  }
]
