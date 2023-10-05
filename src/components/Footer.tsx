"use client";

import styled from "styled-components";
import { SvgLogo } from "./SvgLogo";

const TagFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1440px;
  margin: auto;
  padding: 65px 167px 50px 167px;
  background-color: var(--very-dark-blue);
  border-radius: 0 100px 0 0;

  a {
    text-decoration: none;
    font-weight: 300;
    color: var(--grayish);
  }

  a:hover {
    text-decoration: underline;
  }

  li {
    list-style: none;
    font-weight: 500;
    color: #fff;
    font-size: 16px;
    margin-bottom: 30px;
  }

  li + li {
    font-weight: 300;
    margin-bottom: 16px;
    color: var(--grayish);
  }

  @media (max-width: 768px) {
    padding: 50px 15px 30px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    ul {
      margin-top: 30px;
    }
  }
`;

export const Footer = () => {
  return (
    <TagFooter>
      <div>
        <a href="#" aria-label="Home Page">
          <SvgLogo />
        </a>
      </div>
      <div>
        <ul>
          <li>Product</li>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Integrations</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Company</li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Connect</li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Newsletter</a>
          </li>
          <li>
            <a href="#">Linkedin</a>
          </li>
        </ul>
      </div>
    </TagFooter>
  );
};
