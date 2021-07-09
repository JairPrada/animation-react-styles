/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import styled, { keyframes } from 'styled-components'
import './index.css';

const Fade = ({ direction, children, duration = 1 }) => {
  const In = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
  `
  const Out = keyframes`
  0% {opacity: 1;}
  100% {opacity: 0;}
  `
  const OutRight = keyframes`
  0% {
  opacity: 1;
  }
  100% {
  opacity: 0;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  }`
  const OutUp = keyframes`
  0% {
  opacity: 1;
  }
  100% {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  }`
  const OutLeft = keyframes`
  0% {
  opacity: 1;
  }
  100% {
  opacity: 0;
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
  }`
  const OutDown = keyframes`
  0% {
  opacity: 1;
  }
  100% {
  opacity: 0;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  }`
  const Container = styled.div`
  -webkit-animation-name: ${direction === "In" && In || direction === "Out" && Out || direction === "OutLeft" && OutLeft || direction === "OutRight" && OutRight || direction === "OutUp" && OutUp || direction === "OutDown" && OutDown};
  animation-name: ${direction === "In" && In || direction === "Out" && Out || direction === "OutLeft" && OutLeft || direction === "OutRight" && OutRight || direction === "OutUp" && OutUp || direction === "OutDown" && OutDown};
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

export default Fade
