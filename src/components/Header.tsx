"use client";

import styled from "styled-components";
import { SvgLogo } from "./SvgLogo";
import { Overpass } from "next/font/google";
import { SvgArrowDown } from "./SvgArrowDown";
import { ButtonFull } from "./ButtonFull";
import { ButtonEmpty } from "./ButtonEmpty";
import { useRef, useState } from "react";
import { SvgArrowUp } from "./SvgArrownUp";

const overpass = Overpass({ subsets: ["latin"], weight: ["300", "600"] });

const TagHeader = styled.header`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: auto;
  padding: 65px 167px;
  padding-bottom: 75px;
  background: linear-gradient(to right, var(--very-light-red), var(--light-red)),
    url(../assets/images/bg-pattern-intro-desktop.svg);
  background-position: 30% 50%;
  background-size: 150%;
  background-blend-mode: overlay;
  border-radius: 0 0 0 100px;
  div {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled.a`
  margin-right: 65px;
`;

const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  a {
    color: var(--grayish);
    text-decoration: none;
    margin-right: 5px;
    font-size: 12px;
    font-weight: 600;
  }

  a:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const GeneralMenu = styled.ul`
  display: flex;

  li {
    list-style: none;
  }

  li + li {
    margin-left: 45px;
  }

  button {
    background: none;
    border: none;
    color: var(--grayish);
    text-decoration: none;
    margin-right: 5px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }

  button:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const SingMenu = styled.div`
  a {
    margin-right: 35px;
  }
`;

const Start = styled.div`
  flex-direction: column;
  margin-top: 75px;

  h1 {
    color: #fff;
  }

  p {
    color: var(--grayish);
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  div {
    gap: 20px;
  }
`;

const OpenMenu = styled.ul`
  position: absolute;
  min-width: 130px;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px 20px;
  margin-top: 15px;
  margin-left: -15px;

  list-style: none;

  li + li {
    margin: 0;
    margin-top: 10px;
  }

  a {
    color: #000;
    font-weight: 400;
  }

  a:hover {
    color: #000;
    font-weight: 700;
    text-decoration: none;
  }
`;

export const Header = () => {
  const [productIsOpen, setProductIsOpen] = useState<boolean>(false);
  const [companyIsOpen, setCompanyIsOpen] = useState<boolean>(false);
  const [connectIsOpen, setConnectIsOpen] = useState<boolean>(false);
  const productRef = useRef(false);
  const companyRef = useRef(false);
  const connectRef = useRef(false);

  const handleOpenProduct = () => {
    setProductIsOpen(true);
    productRef.current = true;
  };

  const handleCloseProduct = () => {
    setTimeout(() => {
      if (!productRef.current) {
        setProductIsOpen(false);
      }
    }, 250);
  };

  const handleOpenCompany = () => {
    setCompanyIsOpen(true);
    companyRef.current = true;
  };

  const handleCloseCompany = () => {
    setTimeout(() => {
      if (!companyRef.current) {
        setCompanyIsOpen(false);
      }
    }, 250);
  };

  const handleOpenConnect = () => {
    setConnectIsOpen(true);
    connectRef.current = true;
  };

  const handleCloseConnect = () => {
    setTimeout(() => {
      if (!connectRef.current) {
        setConnectIsOpen(false);
      }
    }, 250);
  };

  return (
    <TagHeader>
      <div>
        <Logo href="#" aria-label="Home Page">
          <SvgLogo />
        </Logo>
        <Menu>
          <GeneralMenu>
            <li
              onMouseEnter={handleOpenProduct}
              onMouseLeave={() => {
                productRef.current = false;
                handleCloseProduct();
              }}
            >
              <button>Product</button>
              {productIsOpen ? <SvgArrowUp /> : <SvgArrowDown />}
              {productIsOpen && (
                <OpenMenu
                  onMouseEnter={handleOpenProduct}
                  onMouseLeave={() => {
                    productRef.current = false;
                    handleCloseProduct();
                  }}
                >
                  <li>
                    <a href="#">Product</a>
                  </li>
                  <li>
                    <a href="#">Product</a>
                  </li>
                  <li>
                    <a href="#">Product</a>
                  </li>
                  <li>
                    <a href="#">Product</a>
                  </li>
                </OpenMenu>
              )}
            </li>
            <li
              onMouseEnter={handleOpenCompany}
              onMouseLeave={() => {
                companyRef.current = false;
                handleCloseCompany();
              }}
            >
              <button>Company</button>
              {companyIsOpen ? <SvgArrowUp /> : <SvgArrowDown />}
              {companyIsOpen && (
                <OpenMenu
                  onMouseEnter={handleOpenCompany}
                  onMouseLeave={() => {
                    companyRef.current = false;
                    handleCloseCompany();
                  }}
                >
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Company</a>
                  </li>
                </OpenMenu>
              )}
            </li>
            <li
              onMouseEnter={handleOpenConnect}
              onMouseLeave={() => {
                connectRef.current = false;
                handleCloseConnect();
              }}
            >
              <button>Connect</button>
              {connectIsOpen ? <SvgArrowUp /> : <SvgArrowDown />}
              {connectIsOpen && (
                <OpenMenu
                  onMouseEnter={handleOpenConnect}
                  onMouseLeave={() => {
                    connectRef.current = false;
                    handleCloseConnect();
                  }}
                >
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Newsletter</a>
                  </li>
                  <li>
                    <a href="#">Linkedin</a>
                  </li>
                </OpenMenu>
              )}
            </li>
          </GeneralMenu>
          <SingMenu>
            <a href="#">Login</a>
            <ButtonFull>Sign Up</ButtonFull>
          </SingMenu>
        </Menu>
      </div>
      <Start>
        <h1 className={overpass.className}>A modern publish plataform</h1>
        <p>Grow your audience and build your online brand</p>
        <div>
          <ButtonFull>Start for Free</ButtonFull>
          <ButtonEmpty>Learn More</ButtonEmpty>
        </div>
      </Start>
    </TagHeader>
  );
};
