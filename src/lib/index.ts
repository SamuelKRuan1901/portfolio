import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { RiNextjsLine } from 'react-icons/ri';
import {
  SiTailwindcss,
  SiCss3,
  SiNodedotjs,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiShadcnui,
  SiPostgresql,
  SiMongodb
} from 'react-icons/si';

export const headerElement = [
  {
    id: 0,
    icon: FaGithub,
    href: 'https://github.com/SamuelKRuan1901'
  },
  {
    id: 1,
    icon: FaFacebook,
    href: 'https://www.facebook.com/profile.php?id=100004354999017&locale=zh_TW'
  },
  {
    id: 2,
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/samuel-k-ruan/'
  },
  {
    id: 3,
    icon: FaInstagram,
    href: 'https://www.instagram.com/samuel_k_1901/'
  }
];

export const skills = [
  {
    id: 0,
    name: 'HTML',
    icon: SiHtml5
  },
  {
    id: 1,
    name: 'CSS',
    icon: SiCss3
  },
  {
    id: 2,
    name: 'JavaScript / TypeScript',
    icon: SiJavascript
  },
  {
    id: 3,
    name: 'React',
    icon: SiReact
  },
  {
    id: 4,
    name: 'Node.js / Express.js',
    icon: SiNodedotjs
  },
  {
    id: 5,
    name: 'Next.js',
    icon: RiNextjsLine
  },
  {
    id: 6,
    name: 'Tailwind CSS',
    icon: SiTailwindcss
  },
  {
    id: 7,
    name: 'Shadcn UI',
    icon: SiShadcnui
  },
  {
    id: 8,
    name: 'PostgreSQL',
    icon: SiPostgresql
  },
  {
    id: 9,
    name: 'MongoDB',
    icon: SiMongodb
  },
  {
    id: 10,
    name: 'Git',
    icon: FaGithub
  }
];

export const projects = [
  {
    title: 'E-commerce Website',
    description: `A E-commerce website that allows users to buy products. It also supports authentication.
     \nTest account: \nEmail:test@example.com \nPassword: 123456789`,
    image: '/project4.png',
    liveSite: 'https://audio-phile-ecommerce.vercel.app/',
    githubCode:
      'https://github.com/SamuelKRuan1901/audioPhile-ecommerce/tree/master',
    techs: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Tailwind CSS',
      'Next.js',
      'Material UI',
      'Node.js',
      'MongoDB'
    ]
  },
  {
    title: 'Kanban Task Manager',
    description: `A Kanban task manager application that allows users to create, edit, and delete tasks.It also supports dark mode,
     easy to use and manage tasks efficiently`,
    image: '/project3.png',
    liveSite: 'https://kanban-task-managemant-app.vercel.app/',
    githubCode:
      'https://github.com/SamuelKRuan1901/kanban-task-managemant-app/tree/master',
    techs: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Tailwind CSS',
      'Next.js',
      'Shadcn UI',
      'Node.js',
      'MongoDB'
    ]
  },
  {
    title: 'Note App',
    description: `A note-taking application that allows users to create, edit, and delete notes.
     It also supports dark mode. Authentication is done using Google OAuth or email and password.
     \nTest account: \nEmail:test@example.com \nPassword: 123456789Aa@`,
    image: '/project2.png',
    liveSite: 'https://note-app-one-mu.vercel.app/',
    githubCode: 'https://github.com/SamuelKRuan1901/NoteApp/tree/master',
    techs: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Tailwind CSS',
      'Next.js',
      'Shadcn UI',
      'Node.js',
      'MongoDB'
    ]
  },
  {
    title: 'Space Tourism Multi-page Website',
    description: `A multi-page website for a space tourism company, 
      showcasing different destinations and experiences.`,
    image: '/project1-picture2.png',
    liveSite: 'https://space-tourism-website-theta-sepia.vercel.app/',
    githubCode:
      'https://github.com/SamuelKRuan1901/space-tourism-website/tree/master',
    techs: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']
  },
  {
    title: 'Entertainment Web App',
    description: `An entertainment web app that allows users to search for movies, TV shows, and actors.
     It also supports dark mode and has a responsive design.`,
    image: '/project5.png',
    liveSite: 'https://entertainment-web-app-six-psi.vercel.app/',
    githubCode:
      'https://github.com/SamuelKRuan1901/entertainment-web-app/tree/master',
    techs: ['HTML', 'CSS', 'JavaScript', 'Vue.js']
  },
  {
    title: 'Designo',
    description: `A landing page for a design agency, showcasing their services and portfolio. STILL DEVELOPING...`,
    image: '/project6.png',
    liveSite: 'https://designo-nine-delta.vercel.app/',
    githubCode: 'https://github.com/SamuelKRuan1901/designo.git',
    techs: ['HTML', 'SCSS', 'JavaScript', 'Angular']
  }
];
