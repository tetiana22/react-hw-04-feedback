import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
padding: 5px 10px;
border-radius: 10px;
border: 2px solid #000;
background-color: #000;
font-size: 18px;
color: white;
cursor: pointer;
transition: color 250ms linear, background-color 250ms linear;
&:hover {
  color: #fff;
  background-color: #000;
  border: 2px solid #96ceb4;
}
`;