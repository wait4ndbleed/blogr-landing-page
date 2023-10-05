"use client";

import styled from "styled-components";
import { SvgLogo } from "./SvgLogo";
import { Overpass } from "next/font/google";
import { SvgArrowDown } from "./SvgArrowDown";
import { ButtonFull } from "./ButtonFull";
import { ButtonEmpty } from "./ButtonEmpty";
import { useEffect, useRef, useState } from "react";
import { SvgArrowUp } from "./SvgArrownUp";
import { SvgArrowDownMobile } from "./SvgArrowDownMobile";
import { SvgArrowUpMobile } from "./SvgArrowUpMobile";

const overpass = Overpass({ subsets: ["latin"], weight: ["300", "600"] });

const TagHeader = styled.header`
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    margin: auto;
    padding: 65px 167px;
    padding-bottom: 75px;
    background: linear-gradient(
        to right,
        var(--very-light-red),
        var(--light-red)
      ),
      url(../assets/images/bg-pattern-intro-desktop.svg);
    background-position: 30% 50%;
    background-size: 150%;
    background-blend-mode: overlay;
    border-radius: 0 0 0 100px;
    div {
      display: flex;
      align-items: center;
    }

    @media (max-width: 750px) {
      background: linear-gradient(
          to right,
          var(--very-light-red),
          var(--light-red)
        ),
        url(../assets/images/bg-pattern-intro-mobile.svg);
      background-position: -300px;
      background-size: 300%;

      div {
        flex-direction: column;
      }
    }

    @media (max-width: 768px) {
      padding: 65px 15px;
    }
  `;

  const Mobile = styled.div`
    flex-direction: row !important;

    @media (max-width: 750px) {
      width: 100%;
      justify-content: space-between;
    }
  `;

  const Logo = styled.a`
    margin-right: 65px;
  `;

  const MenuMobile = styled.button`
    display: none;
    background: none;
    border: none;

    @media (max-width: 750px) {
      display: block;
    }
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

    @media (max-width: 750px) {
      display: none;
      position: relative;
    }
  `;

  const MenuMobileOpen = styled.nav`
    width: 90%;
    display: flex;
    padding: 30px;
    flex-direction: column;
    text-align: center;

    top: 130px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    box-shadow: 4px 20px 32px -25px rgba(0, 0, 0, 0.75);

    div {
      flex-direction: row;
      justify-content: center;
    }

    div + div {
      margin-top: 30px;
    }

    ul {
      margin-top: 40px;
      margin-bottom: 40px;
    }

    li {
      list-style: none;
      color: var(--dark-grayish);
      font-weight: 600;

      a {
        text-decoration: none;
        color: var(--dark-grayish);
        font-size: 20px;
        font-weight: 600;
        margin-top: 30px;
        margin-bottom: 10px;
      }
    }

    li + li {
      margin-top: 20px;
    }

    button {
      background: none;
      border: none;
      color: var(--dark-grayish);
      padding: 0;
      margin-right: 10px;
      margin-left: 10px;
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;
    }

    button:last-child {
      background: linear-gradient(
        to right,
        var(--very-light-red),
        var(--light-red)
      );
      color: #fff;
      padding: 10px 25px;
      border-radius: 50px;
      font-size: 12px;
    }
  `;

  const Link = styled.a`
    text-decoration: none;
    color: var(--dark-grayish);
    font-size: 20px;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 10px;
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

    @media (max-width: 768px) {
      li + li {
        margin-left: 15px;
      }
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
    text-align: center;

    h1 {
      color: #fff;
    }

    p {
      color: var(--grayish);
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: 30px;
    }

    div {
      gap: 20px;
    }

    @media (max-width: 768px) {
      div {
        flex-direction: row;
      }
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
  const [productMobileIsOpen, setProductMobileIsOpen] =
    useState<boolean>(false);
  const [companyIsOpen, setCompanyIsOpen] = useState<boolean>(false);
  const [companyMobileIsOpen, setCompanyMobileIsOpen] =
    useState<boolean>(false);
  const [connectIsOpen, setConnectIsOpen] = useState<boolean>(false);
  const [connectMobileIsOpen, setConnectMobileIsOpen] =
    useState<boolean>(false);
  const [menuMobile, setMenuMobile] = useState<boolean>(false);    

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

  const handleMenuMobile = () => {
    setMenuMobile((prev) => !prev);
    setProductMobileIsOpen(false);
    setCompanyMobileIsOpen(false);
    setConnectMobileIsOpen(false);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setMenuMobile(false);
      setProductMobileIsOpen(false);
      setCompanyMobileIsOpen(false);
      setConnectMobileIsOpen(false);
    }
    
  };

  return (
    <TagHeader>
      <div>
        <Mobile>
          <Logo href="#" aria-label="Home Page">
            <SvgLogo />
          </Logo>
          <MenuMobile onClick={handleMenuMobile}>
            {menuMobile ? (
              <img src="../assets/images/icon-close.svg" alt="" />
            ) : (
              <img src="../assets/images/icon-hamburger.svg" alt="" />
            )}
          </MenuMobile>
        </Mobile>
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
        {menuMobile && (
          <MenuMobileOpen>
            <div>
              <button
                className={overpass.className}
                onClick={() => setProductMobileIsOpen((prev) => !prev)}
              >
                Product
              </button>
              {productMobileIsOpen ? <SvgArrowUpMobile /> : <SvgArrowDownMobile />}
            </div>
            {productMobileIsOpen && (
              <ul className={overpass.className}>
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
            )}
            <div>
              <button
                className={overpass.className}
                onClick={() => setCompanyMobileIsOpen((prev) => !prev)}
              >
                Company
              </button>
              {companyMobileIsOpen ? <SvgArrowUpMobile /> : <SvgArrowDownMobile />}
            </div>
            {companyMobileIsOpen && (
              <ul className={overpass.className}>
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
            )}
            <div>
              <button
                className={overpass.className}
                onClick={() => setConnectMobileIsOpen((prev) => !prev)}
              >
                Connect
              </button>
              {connectMobileIsOpen ? <SvgArrowUpMobile /> : <SvgArrowDownMobile />}
            </div>
            {connectMobileIsOpen && (
              <ul className={overpass.className}>
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
            )}

            <Link className={overpass.className} href="#">
              Login
            </Link>
            <div>
              <button>Sign Up</button>
            </div>
          </MenuMobileOpen>
        )}
      </div>
      <Start>
        <h1 className={overpass.className}>A modern {isMobile && <br/>} publishing plataform</h1>
        <p>Grow your audience and build your online brand</p>
        <div>
          <ButtonFull>Start for Free</ButtonFull>
          <ButtonEmpty>Learn More</ButtonEmpty>
        </div>
      </Start>
    </TagHeader>
  );
};
