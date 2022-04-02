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
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1></h1>
            <h5>Artificial Intelligence wit attitudes</h5>
            <p>
              <a href="https://www.technologyreview.com/2019/03/02/65994/ai-ethics-mit-college-of-computing-tech-humanities/">
                There’s no such thing as a “tech person” in the age of AI
              </a>
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src={attitudes}
              alt="wit-attitudes"
            />
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
    </main>
  );
}

export default Hero;
