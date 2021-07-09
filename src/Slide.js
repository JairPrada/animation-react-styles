/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import styled, { keyframes } from 'styled-components'
import './index.css';

const Slide = ({ direction, children, duration = 1 }) => {
  const InLeft = keyframes`
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }`
  
  const InRight = keyframes`
  0% {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        visibility: visible;
    }
  100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
  }`
  const InUp = keyframes`
  0% {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        visibility: visible;
    }
  100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
  }`
  const InDown = keyframes`
  0% {
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        visibility: visible;
    }
  100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
  }`
  const Container = styled.div`
  -webkit-animation-name: ${direction === "InLeft" && InLeft || direction === "InRight" && InRight || direction === "InUp" && InUp || direction === "InDown" && InDown};
  animation-name: ${direction === "InLeft" && InLeft || direction === "InRight" && InRight || direction === "InUp" && InUp || direction === "InDown" && InDown};
  -webkit-animation-duration: ${duration}s;
  animation-duration: ${duration}s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  `
  return (
    <Container>
      {children}
    </Container >
  )
}

export default Slide
