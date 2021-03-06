import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  padding-bottom: 2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
    padding-top: 2rem;
  }
  @media (min-width: 992px) {
    max-width: 960px;
    padding-top: 3rem;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
    padding-top: 4rem;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;
  margin:ì-right: 1px;

  h1 {
    font-size: 2.8rem;
    color: #f6f6f6;
    opacity: 0.98;
    font-weight: 400;
  }

  h5 {
    font-size: 1.6rem;
    color: rgb(119, 119, 121);
    margin-bottom: 1rem;
    font-weight: 400;
  }

  .p1 {
    font-size: 17px;
    color: #f6f6f1;
    opacity: 0.85;
    text-decoration: underline;
  }

  .p2{
    margin-top:10px;
    font-size: 20px;
    color: #f6f6f1;
    opacity: 0.85;
  }

  .description{
    color: #e33fa4;
  }

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const HeroRight = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
`;

export const Image = styled.img`
  height: 300px;
  width: auto;
  margin-bottom: 70px;
`;
