import React from "react";
import icon_uno from "../../Assets/logo.png"
import styled from "styled-components";

const Social = styled.div`
  display: block;
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  img {
    width: 50px;
    opacity: 0.5;
    transition: 0.1s ease-in;
    &:hover {
      opacity: 1
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
function FixSocialIcon() {
  return (
    <Social>
      <ul>
        <li className="item">
            <a href="https://open.spotify.com/playlist/4jOpQ4t8Ii93fKvBJb6jUr?si=9ed001eadf764a3f" target="_blank"
            rel="noopener noreferrer"><img src={icon_uno} /></a>
        </li>
      </ul>
    </Social>
  );
}

export default FixSocialIcon;
