"use client";

import styled from "styled-components";

const Design = styled.section`
  display: flex;
  justify-content: end;
  max-width: 1440px;
  width: 100%;
  padding-left: 167px;
  padding-right: 167px;
  padding-bottom: 60px;
  padding-top: 100px;
  background-image: url("../assets/images/illustration-laptop-desktop.svg");
  background-size: 60%;
  background-repeat: no-repeat;
  background-position-x: -225px;
  background-position-y: 60%;

  h2 {
    text-align: center;
    margin-bottom: 80px;
    font-size: 32px;
    font-weight: 500;
    color: var(--text-body);
  }
`;

const Text = styled.div`
  max-width: 50%;

  h3 {
    color: var(--text-body);
    margin-bottom: 20px;
    font-size: 24px;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    color: var(--dark-grayish);
  }

  div {
    margin-bottom: 35px;
  }
`;

export const HomeBot = () => {
  return (
    <Design>
      <Text>
        <div>
          <h3>Free, open, simple</h3>
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
          <h3>Powerful tooling</h3>
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
