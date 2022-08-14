import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import { SidebarData } from "../components/SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons";

const Nav = styled.div`
  display: flex;
  background-color: #15171c;
  height: 80px;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sideBar }) => (sideBar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <>
      <IconContext.Provider value={{ color : '#8B008B'}} >
      <Nav>
        <NavIcon to="#">
          <FaIcon.FaBars onClick={showSideBar} />
        </NavIcon>
      </Nav>
      <SidebarNav sideBar={sideBar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcon.AiOutlineClose onClick={showSideBar} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
