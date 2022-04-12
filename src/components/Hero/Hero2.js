import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import attitudes from '../../Assets/punkylirico.png';
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
} from "./HeroElements";
import cecinepas from '../../Assets/nepas.png'

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <div style={{"backgroundColor": "#fafaff"}}>
      <HeroContainer>
        <HeroWrapper>
        <img src={cecinepas}/>
        </HeroWrapper>
      </HeroContainer>
      </div>
    </main>
  );
}

export default Hero;
