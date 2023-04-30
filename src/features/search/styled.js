import styled from "styled-components";
import background from "./Search.svg"
import {DebounceInput} from 'react-debounce-input';

export const Input = styled(DebounceInput)`
  width: 100%;
  height: 48px;
  padding-left: 45px;
  display: block;
  border: none;
  border-radius: 33px;
  margin-left: 16px;
  margin-right: 16px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
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
    width:90%;
    height:44px;
    padding-left: 8vw;
    background-position: top 50% left 3% ;
  };

  @media(max-width: ${({ theme }) => theme.breakPoints.mobileMin}px) {
    padding-left: 10vw;
    background-position: top 50% left 3% ;
  };
`;