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

  @media (max-width: 750px) {
    padding: 0 25px;
    flex-direction: column;
    text-align: center;
    gap: 0;
    background-image: url("../assets/images/bg-circles-mobile.png");
    background-repeat: no-repeat;
    border-radius: 0 100px 0 100px;
  }
`;

const Phone = styled.div`
  padding: 0;
  max-width: 60%;
  img {
    width: 455px;
    position: relative;
    top: -70px;
    left: -30px;
    padding: 0;
    z-index: 3;
  }

  @media (max-width: 768px) {
    width: auto;
    min-width: 50%;

    img {
      width: 200%;
      top: -160px;
      left: -70%;
    }
  }

  @media (max-width: 750px) {
    width: auto;
    max-height: 150px;

    img {
      width: 300px;
      top: -160px;
      left: 0;
    }
  }
`;

const Text = styled.div`
  flex: 1;
  min-width: 50%;
  max-width: 70%;
  margin: 80px 0;
  z-index: 2;

  h2 {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 30px;
  }

  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 28px;
    color: var(--grayish);
  }

  @media (max-width: 1024px) {
    margin: 40px 0 0 0;
  }

  @media (max-width: 750px) {
    margin-top: 30px;
    padding-bottom: 40px;
    width: 100%;
    h2 {
      margin-bottom: 10px;
    }

    p {
      line-height: 20px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    h2 {
      margin-bottom: 10px;
    }

    p {
      line-height: 20px;
    }
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
          <h2 className={overpass.className}>
            State og the Art Infrastructure
          </h2>
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
