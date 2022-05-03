import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import React from "react";
import styled from "styled-components";

function Error(props) {
  return (
    <>
    <GradientHeader>
      <Header title={`Error`}></Header>
      <h1>404</h1>
      <h2>Page Not found</h2>
      
    </GradientHeader>
    <Footer></Footer></>
  );
}

export default Error;

const GradientHeader = styled.div`
  height: 380px;
  padding-left: 130px;
  padding-right: 130px;
  padding-top: 30px;
  background: linear-gradient(180deg, #09090a 0%, rgba(39, 49, 55, 0.52) 100%),
    linear-gradient(228.87deg, rgba(69, 80, 174, 0.54) 9.05%, rgba(227, 9, 88, 0.27) 51.25%, rgba(255, 255, 255, 0) 84.11%),
    linear-gradient(243.33deg, #4c15eb 5.62%, #245aaa 36.13%, rgba(221, 50, 13, 0.71) 127.92%);
 

 h1 {
     padding-top: 20px;
     font-size: 45px;
 }
`;
