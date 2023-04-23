import styled from "styled-components";
import background from "./Search.svg"

export const Input = styled.input`
  width: 100%;
  padding-left: 45px;
  display: block;
  border: none;
  border-radius: 33px;
  margin-right: 16px;
  background-image: url("${background}");
  background-repeat: no-repeat;
  background-position: top 50% left 5% ;
  :focus {
    outline: none;
  };
  ::placeholder{
    color:  ${({ theme }) => theme.color.darkerGray};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;    
  };

  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    max-width: 288px;
    margin-right: 0;
  };
`;