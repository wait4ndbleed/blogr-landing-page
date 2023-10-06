"use client";

import { Overpass } from "next/font/google";
import { useEffect, useState } from "react";
import styled from "styled-components";

const overpass = Overpass({ subsets: ["latin"], weight: ["300", "600"] });

const Design = styled.section`
  max-width: 1440px;
  width: 100%;
  padding: 170px 167px 0px 167px;
  background-image: url("../assets/images/illustration-editor-desktop.svg");
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 145% 80px;

  h2 {
    text-align: center;
    margin-bottom: 80px;
    font-size: 32px;
    font-weight: 600;
    color: var(--text-body);
  }

  @media (max-width: 768px) {
    padding: 0 15px 60px 15px;
    margin-top: 100px;
    margin-bottom: 150px;

    background-image: url("../assets/images/illustration-editor-mobile.svg");
    background-size: 410px;
    background-position: center 70px;
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
    padding: 350px 30px 0 30px;
    text-align: center;

    h3 {
      padding: 0 35px;
    }
  }
`;

export const HomeTop = () => {
  return (
    <Design>
      <h2 className={overpass.className}>Designed for the future</h2>
      <Text>
        <div>
          <h3 className={overpass.className}>
            Introducing an extensible editor
          </h3>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </div>
        <div>
          <h3 className={overpass.className}>Robust content management</h3>
          <p>
            Flexibile content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you're in full control.
          </p>
        </div>
      </Text>
    </Design>
  );
};
