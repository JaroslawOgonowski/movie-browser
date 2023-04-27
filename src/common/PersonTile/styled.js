import styled from "styled-components";

export const StyledContainer = styled.div`
width: 208px;
height: 339px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFFFFF;
filter: drop-shadow(0px 4px 12px rgba(186, 199, 213, 0.5));
border-radius: 5px;
`;

export const Photo = styled.img`
width: 176px;
height: 231px;
margin: 16px 16px 12px 16px;
`;

export const Name = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 130%;
text-align: center;
color: ${({ theme }) => theme.color.woodsmoke};
`;

export const Role = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 150%;
text-align: center;
color: ${({ theme }) => theme.color.waterloo};
`;

