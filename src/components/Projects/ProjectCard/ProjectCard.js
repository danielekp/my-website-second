import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Label,
  BtnGroup,
} from "./ProjectCardElements";
import Description from "./description";
import github from "../../../Assets/github.png"
import hf from "../../../Assets/hf.png"

function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <Label>
              {list.labels.map((label,index) => {
                return(
                <div className={label}>{label}</div>
              )
              })}
            </Label>
            <BtnGroup>
            <>
            {list.github_url &&
              <a
                className="btn btn2 SecondarBtn"
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >

                <img src={github} style={{"width":"30px"}}/>
              </a>
              }
              {list.hf &&
              <a
                className="btn btn2 SecondarBtn"
                href={list.hf}
                target="_blank"
                rel="noopener noreferrer"
              >

                <img src={hf} style={{"width":"30px"}}/>
              </a>
              }
            </>
              <Description proj={list.id_proj}/>
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
