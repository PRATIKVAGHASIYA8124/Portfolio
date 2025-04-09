import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/pratik.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/git2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";


const customScroll = (el) => {
  const targetY = el.getBoundingClientRect().top + window.pageYOffset;
  const startY = window.pageYOffset;
  const duration = 1000;
  const startTime = performance.now();

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animateScroll = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + (targetY - startY) * easedProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <HashLink
                smooth
                to="#home"
                scroll={customScroll}
                className={activeLink === 'home' ? 'active navbar-link nav-link' : 'navbar-link nav-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </HashLink>
              <HashLink
                smooth
                to="#skills"
                scroll={customScroll}
                className={activeLink === 'skills' ? 'active navbar-link nav-link' : 'navbar-link nav-link'}
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </HashLink>
              <HashLink
                smooth
                to="#projects"
                scroll={customScroll}
                className={activeLink === 'projects' ? 'active navbar-link nav-link' : 'navbar-link nav-link'}
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </HashLink>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/pratik-vaghasiya-831459257/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/PRATIKVAGHASIYA8124"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/pratik_patel.08/?hl=en"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink smooth to="#connect" scroll={customScroll}>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}
