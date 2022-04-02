import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  border-bottom: 1px solid rgb(0, 0, 0);
  padding-bottom: 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const CardLeft = styled.div`
  background: #151418;
  border-radius: 5px;
  padding: 5px;
  justify-self: center;

  img {
    border-radius: 3px;
    height: auto;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  p {
    font-weight: 400;
    max-width: 400px;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  .DeepLearning {
    border-radius: 10px;
    margin-right: 4px;
    padding: 10px;
    background-color: #8bc34a;
    font-size: 15px;
    font-weight: 400;
    border-color: #689f38;
    border-width: 2px;
    border-style: solid;
  }

  .DeepLearning:hover{
    opacity: 0.8
  }

  .ComputerVision {
    border-radius: 10px;
    margin-right: 4px;
    padding: 10px;
    background-color: #fff59d;
    font-size: 15px;
    font-weight: 400;
    border-color: #fdd835;
    border-width: 2px;
    border-style: solid;
  }

  .ComputerVision:hover{
    opacity: 0.8
  }

  .FullStack {
    border-radius: 10px;
    margin-right: 4px;
    padding: 10px;
    background-color: #90caf9;
    font-size: 15px;
    font-weight: 400;
    border-color: #039be5;
    border-width: 2px;
    border-style: solid;
  }

  .FullStack:hover {
    opacity: 0.8
  }

  .NLP {
    border-radius: 10px;
    margin-right: 4px;
    padding: 10px;
    background-color: #191970;
    font-size: 15px;
    font-weight: 400;
    border-color: #2a52be;
    border-width: 2px;
    border-style: solid;
    color: white;
  }

  .NLP:hover {
    opacity: 0.8
  }

  .Art {
    border-radius: 10px;
    margin-right: 4px;
    padding: 10px;
    background-color: #cd853f;
    font-size: 15px;
    font-weight: 400;
    border-color: #f4a460;
    border-width: 2px;
    border-style: solid;
  }

  .Art:hover {
    opacity: 0.8
  }
`;

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;
