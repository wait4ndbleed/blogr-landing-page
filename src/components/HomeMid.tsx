"use client";

import { Overpass } from "next/font/google";
import styled from "styled-components";

const overpass = Overpass({ subsets: ["latin"], weight: ["300", "600"] });

const State = styled.section`
  margin-top: 50px;
  width: 100%;
  max-width: 1440px;
  padding: 0 167px;
  display: flex;
  gap: 50px;
  color: #fff;

  background-image: url("../assets/images/bg-circles.png");
  background-repeat: no-repeat;
  border-radius: 0 100px 0 100px;
`;

const Phone = styled.div`
  padding: 0;
  flex: 1;
  height: 1%;
  img {
    width: 455px;
    position: relative;
    top: -70px;
    left: -30px;
    padding: 0;
    z-index: 3;
  }
`;

const Text = styled.div`
  flex: 1;
  margin: 80px 0;
  z-index: 2;

  h2 {
    font-weight: 500;
    font-size: 30px;
    margin-bottom: 30px;
  }

  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 28px;
    color: var(--grayish);
  }
`;

export const HomeMid = () => {
  return (
    <>
      <State>
        <Phone>
          <img src="../assets/images/illustration-phones.svg" alt="" />
        </Phone>
        <Text>
          <h2>State og the Art Infrastructure</h2>
          <p className={overpass.className}>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </Text>
      </State>
    </>
  );
};
