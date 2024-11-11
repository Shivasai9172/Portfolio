import PortfolioLogo from '../assets/Protfolio-logo.jpg'
import Fake from '../assets/fake.jpg'
import ECmomLogo from '../assets/E-comm-logo.jpg'
import SnapiaLogo from '../assets/SnapiaLogo.png'
import Octanet from '../assets/Octanet.jpg'

export const ProjectList = [
    {
        key: 0,
        name: "Counterfeit products detection",
        image:Fake ,
        skills: "HTML,CSS,JavaScript",
        codeLink: "https://github.com/Shivasai9172/fake-products",
        demoLink: "https://counterfeit-products.netlify.app/",
        info: "As a web developer, I designed and built an counterfeit product detection website using  HTML,CSS and JavaScript. The website allows users to add and get details about the product by scanning the QR provided on the product.",
    },
    {
        key: 1,
        name: "Shopper(E-commerce)",
        image: ECmomLogo,
        skills: "ReactJS",
        codeLink: "https://github.com/Shivasai9172/E-Commerce",
        demoLink: "https://e-commerce-blond-gamma.vercel.app/",
        info: "The e-commerce website allows users to explore fashion and different stylings in clothing. The platform also allows users to search for products, view product details and reviews, manage their cart. Overall, it's a comprehensive platform that offers a seamless shopping experience for users.",
    },
    {
        key: 2,
        name: "Instaverse (Social Media)",
        image: SnapiaLogo,
        skills: "ReactJS, Tailwind CSS ,NodeJS ,ExpressJS, MongoDB",
        codeLink: "https://github.com/Shivasai9172/Instaverse",
        demoLink: "/",
        info: 'Streamlined photo uploads through Cloudinary.Empowered users to create accounts, post updates, follow others, and engage with posts through liking.Efficient photo uploads, interactive post interactions.'
    },

    
    {
        key: 3,
        name: "Personal Portfolio",
        image: PortfolioLogo,
        skills: "React,React Router, CSS",
        codeLink: "https://github.com/Shivasai9172/Portfolio",
        demoLink: "https://portfolio-theta-sepia-42.vercel.app/",
        info: "I created a personal portfolio website using React JS, HTML, and CSS to showcase my projects and skills. The website serves as a platform for people to learn more about me and my professional accomplishments.My portfolio features information about my education, work experience, and technical skills, as well as a section highlighting my completed projects. Overall, my portfolio serves as a valuable asset in advancing my career and achieving my professional goals.",
    },

    

]


export const clientProject = [
    {
        name: "OctaNet services task-1 (Internship)",
        image: Octanet,
        clientDemoLink: "https://joyful-stardust-cfd00c.netlify.app/",
    },
    {
        name: "OctaNet services task-2 (Internship)",
        image: Octanet,
        clientDemoLink: "https://relaxed-manatee-b9f122.netlify.app/",
    },
]