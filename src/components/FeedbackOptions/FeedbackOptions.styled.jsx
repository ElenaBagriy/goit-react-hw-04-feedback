import styled from "styled-components";

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 36px 0;
  list-style: none;
  `;

export const Button = styled.button`
  font-size: 28px;
  width: 150px;
  height: 50px;
  border: 1px solid #166c4f;
  border-radius: 10px;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  background-color: #a6d2c3;

  transition: scale 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    scale: 1.05;
  }

  &:focus {
    scale: 1.05;
    background-color: #77e8c2;
  }
`