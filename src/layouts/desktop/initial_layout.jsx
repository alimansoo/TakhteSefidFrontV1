import { AppBar } from "@mui/material";
import React from "react";

import { ReactComponent as Logo } from "../../assets/Logo.svg";
import MainContainer from "../../components/container";

const InitialLayoutDesktop = ({ children, searchText, filter = [] }) => {
  return (
    <>
      <AppBar
        className="!bg-white !shadow-none border-b border-gray-300 h-[65px] justify-center"
        position="fixed"
      >
        <MainContainer className={`flex flex-row justify-center items-center`}>
          <Logo />
        </MainContainer>
      </AppBar>
      <main className={`mt-[65px]`}>
        <MainContainer
          className={`w-full flex flex-col justify-center items-center gap-8 py-8`}
        >
          {children}
        </MainContainer>
      </main>
    </>
  );
};

export default InitialLayoutDesktop;
