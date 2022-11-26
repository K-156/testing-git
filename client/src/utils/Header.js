import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  let status = "show";

  useEffect(() => {
    if (sidebar) {
      status = "show";
    } else {
      status = "";
    }
  }, [sidebar]);

  return (
    <>
      <StyledHeader>
        <div class="nav-center">
          <div class="nav-header">
            <h3>Instagram</h3>
            <button
              class="nav-btn"
              id="nav-btn"
              onClick={() => setSidebar(!sidebar)}
            >
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <ul class="nav-links">
            <li>
              <a href="index.html">home</a>
            </li>
            <li>
              <a href="about.html">about</a>
            </li>
            <li>
              <a href="projects.html">projects</a>
            </li>
            <li>
              <a href="contact.html">contact</a>
            </li>
          </ul>
        </div>

        <aside class="sidebar" id="sidebar">
          <div>
            <ul class="sidebar-links">
              <li>
                <a href="index.html">home</a>
              </li>
              <li>
                <a href="about.html">about</a>
              </li>
              <li>
                <a href="projects.html">projects</a>
              </li>
              <li>
                <a href="contact.html">contact</a>
              </li>
            </ul>
          </div>
        </aside>
      </StyledHeader>
    </>
  );
};

const StyledHeader = styled.nav`
  text-transform: capitalize;

  .nav-links {
    display: none;
  }
  .nav {
    height: 5rem;
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    padding: 1rem;
  }
  .nav-center {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-box-align: center;
    align-items: center;
    padding-top: 1rem;
  }
  .nav-btn {
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    font-size: 2rem;
    cursor: pointer;
    justify-self: right;
  }

  @media screen and (min-width: 768px) {
    .nav {
      background: var(--clr-primary-10);
    }
    .nav-btn {
      display: none;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-items: center;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
    .nav-links a {
      text-transform: capitalize;
      color: var(--clr-grey-1);
      font-weight: bold;
      letter-spacing: var(--spacing);
      -webkit-transition: var(--transition);
      transition: var(--transition);
    }
    .nav-links a:hover {
      color: var(--clr-primary-5);
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      -webkit-box-align: center;
      align-items: center;
    }

    .nav-links {
      justify-self: end;
    }
  }
  /* fixed navbar */
  .navbar-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--clr-white);
    z-index: 2;
    box-shadow: var(--light-shadow);
  }
`;

export default Header;
