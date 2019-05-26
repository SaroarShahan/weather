import React from "react";
import Styled from "styled-components";
import Bg from "../../assets/images/bg.png";

const Titles = () => {
  return (
    <Container bg={Bg}>
      <Title>Today's Weather</Title>
      <SubTitle>Find temperature, humidity and more...</SubTitle>
    </Container>
  );
};

export default Titles;

const Container = Styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;
  background: ${props => (props.bg ? `url(${props.bg})` : null)};
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 3rem 0;
  }

  @media (max-width: 448px) and (min-width: 320px) {
    padding: 1rem 0;
  }

`;

const Title = Styled.h1`
  margin: 0 0 2rem;
  font-weight: 700;
  font-size: 3.5rem;
  color: #fff;
  letter-spacing: .2rem;

  @media (max-width: 991px) {
    font-size: 2.8rem;
    margin: 0 0 1.5rem;
  }
`;

const SubTitle = Styled.p`
  margin: 0 0 1.5rem;
  color: #fff;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 991px) {
    font-size: 1.4rem;
  }
`;
