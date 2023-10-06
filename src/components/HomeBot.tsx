"use client";

import { Overpass } from "next/font/google";
import styled from "styled-components";

const overpass = Overpass({ subsets: ["latin"], weight: ["300", "600"] });

const Design = styled.section`
  display: flex;
  justify-content: end;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  padding: 155px 167px 220px 167px;
  background-image: url("../assets/images/illustration-laptop-desktop.svg");
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: -225px 0;

  h2 {
    text-align: center;
    margin-bottom: 80px;
    font-size: 32px;
    font-weight: 500;
    color: var(--text-body);
  }
  
  @media (max-width: 768px) {
    padding: 400px 15px 25px 15px;
    margin-top: 70px;
    margin-bottom: 20px;

    background-image: url("../assets/images/illustration-laptop-mobile.svg");
    background-position: center top;
    background-size: 510px;
  }
`;

const Text = styled.div`
  max-width: 50%;

  h3 {
    color: var(--text-body);
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    color: var(--dark-grayish);
  }

  div {
    margin-bottom: 35px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    padding: 0 30px;
  }
`;

export const HomeBot = () => {
  return (
    <Design>
      <Text>
        <div>
          <h3  className={overpass.className}>Free, open, simple</h3>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers, It supports features such as code
            syntax highlighting, Rss feeds, social media integration,
            thrid-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div>
          <h3 className={overpass.className}>Powerful tooling</h3>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </Text>
    </Design>
  );
};
