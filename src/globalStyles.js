import { css } from "styled-components";

export const mainColor = () => {
  return css`
    cyan
    `;
};

export const secondaryColor = () => {
  return css`
    black
    `;
};

export const sectionIt = () => {
  return css`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  `;
};

export const mobileIt = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const centerIt = () => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
};

export const columnIt = () => {
  return css`
    display: flex;
    flex-direction: column;
  `;
};
