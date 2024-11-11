import React from 'react';
import { useSpring, animated, useInView, config } from 'react-spring';
import '../styles/Section.css';
import { Link } from 'react-router-dom';
import ProjectAnimation from '../assets/animations/ProjectAnimation.json'

const Section = ({Lottie}) => {
    
    const [ProjectImageRef, ProjectImageInView] = useInView({
        triggerOnce: true,
    });

    const [ProjectTextRef, ProjectTextInView] = useInView({
        triggerOnce: true,
    });

    const ProjectImageAnimation = useSpring({
        opacity: ProjectImageInView ? 1 : 0,
        transform: ProjectImageInView ? 'translate3d(0, 0, 0)' : 'translate3d(-90%, 0, 0)',
        config: config.default,
      
    });

    const ProjectTextAnimation = useSpring({
        opacity: ProjectTextInView ? 1 : 0,
        transform: ProjectTextInView ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)',
        config: config.default,
      
    });


    return (
        <>
            <section className='secParent'>
                <div className="hero">
                    <animated.div ref={ProjectImageRef} className="hero" style={ProjectImageAnimation}>
                        <Lottie
                            animationData={ProjectAnimation}
                            className="hero-img"
                        />
                    </animated.div>
                </div>
                <animated.div ref={ProjectTextRef} className="secChild1" style={ProjectTextAnimation}>
                    <p className='project-line'>
                        <span className="main-text" style={{ fontSize: "30px", fontWeight: 'bold' }}>Successfully</span> completed a web page <b>(Counterfeit product detection using block chain technology)</b> using <b>HTML,CSS,JavaScript</b>. <br></br> <br /> An e-commerce<b>(Shopper)</b> webpage using <b>React JS</b>. <br /><br /> A mern-stack-project <b>(Instaverse)</b> using <b>React JS,Node JS,Mongo DB</b>.
                    </p>
                    <h6 className="project-line">
                        <Link style={{ color: '#fc7b54' }} to='/projects'>
                            Projects{' '}
                            <i className="fa-solid fa-arrow-right" style={{ color: 'black' }}></i>
                        </Link>
                    </h6>
                </animated.div>
            </section>
        </>
    );
};

export default Section;
