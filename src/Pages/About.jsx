import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/About.css';
import { useSpring, animated, config } from 'react-spring';
import AboutAnimation from '../assets/animations/AboutAnimation.json'

const About = ({ Lottie }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const aboutTextAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 500,
  });

  const aboutImageAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 500,
    config: config.default,
  });

  return (
    <>
      <div className="about" >
        <VerticalTimeline lineColor="#f06529" style={{ backgroundColor: '#f0f0f0' }}>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2024 MARCH - 2024 APRIL"
            iconStyle={{ background: '#fc7b54', color: '#fff' }}
            icon={<i className="fa-solid fa-briefcase about-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">OctaNet services PVT LTD</h3>
            <br />
            <h3 className="vertical-timeline-element-title">Web development internship</h3>
            <p>HTML,CSS,JavaScript</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 - 2024"
            iconStyle={{ background: '#fc7b54', color: '#fff' }}
            icon={<i className="fa-solid fa-graduation-cap about-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">St.Peter's engineering college</h3>
            <br />
            <h3 className="vertical-timeline-element-title">Computer Science and Engineering (CSE)</h3>
            <br />
            <h3 className="vertical-timeline-element-title">Total CGPA: 7.57</h3>
            <p>B.Tech</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 - 2020"
            iconStyle={{ background: '#fc7b54', color: '#fff' }}
            icon={<i className="fa-solid fa-building-columns about-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">Sri Chaitanya college</h3>
            <br />
            <h3 className="vertical-timeline-element-title">MPC</h3>
            <br />
            <h3 className="vertical-timeline-element-title">Total marks: 942</h3>
            <p>Intermediate</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018"
            iconStyle={{ background: '#fc7b54', color: '#fff' }}
            icon={<i className="fa-solid fa-building-columns about-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">Rainbow High School</h3>
            <br />
            <h3 className="vertical-timeline-element-title">SSC</h3>
            <br />
            <h3 className="vertical-timeline-element-title">Total CGPA: 8.8</h3>
            <p>Schooling</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        
      </div>
      <main className="main">
        <animated.div className="about-text" style={aboutTextAnimation}>
          <h2 className="text head" style={{ textAlign: 'center' }}>
            About
          </h2>
          <div className="paragraph">
            <p>
              Greetings! I'm Kandarapu Shivasai, a dynamic web developer pursued my engineering in St.Peter's engineering college. Thriving on challenges, I fuel my passion for web development with cutting-edge skills. A meticulous creator, I prioritize tech innovation for exceptional solutions and captivating user experiences. I'm ready to collaborate on new visions, crafting tailored solutions that make lasting impacts. Eager for fresh challenges, I'm here to craft remarkable web experiences for clients and users alike!
            </p>
          </div>

        </animated.div>
        <animated.div className="hero" style={aboutImageAnimation}>
          <Lottie
            animationData={AboutAnimation}
            className="hero-img"
          />
        </animated.div>
      </main>
    </>
  );
};

export default About;
