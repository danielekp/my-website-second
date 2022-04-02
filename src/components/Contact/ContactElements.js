import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin: 5rem 0;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;

  a{
    font-size: 1rem;
    font-weight: 50;
    margin-bottom: 1rem;
  }

  img{
    width: 100px;
    margin-left: 15px;
  }

  @media (min-width: 376px) {
    a {
      font-size: 1.5rem;
    }
    img{
      width: 36px;
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
    a {
      margin-bottom: 0;
      font-size: 2rem;
    }
  }
`;
