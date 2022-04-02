import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
import gmail from "../../Assets/gmail.png";
import letterboxd from "../../Assets/letterboxd.png";
import facebook from "../../Assets/facebook.png";
import github from "../../Assets/github.png";
import linkedin from "../../Assets/linkedin.png";

function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Contacts</div>
        <div className="BigCard">
          <Email>
            <a>danielekpace@gmail.com</a>
            <img src={gmail}/>
          </Email>
          <Email>
            <a href="https://www.facebook.com/daniele.pace.5/">Daniele Pace</a>
            <img src={facebook}/>
          </Email>
          <Email>
            <a href="https://github.com/danielekp">danielekp</a>
            <img src={github}/>
          </Email>
          <Email>
            <a href="https://www.linkedin.com/in/daniele-k-pace/">Daniele Pace</a>
            <img src={linkedin}/>
          </Email>
          <Email>
            <a href="https://letterboxd.com/danielaush/">danielaush</a>
            <img src={letterboxd}/>
          </Email>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
