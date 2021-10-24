import styled, { css } from "styled-components";

import Logo from "../../../assets/images/logo-won.svg";

const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.main.colors.won.blue};
    height: ${theme.main.sizes.leftMenu.height};

    .leftMenuHeaderLink {
      &:hover {
        text-decoration: none;
      }
    }

    .projectName {
      display: block;
      width: 100%;
      height: ${theme.main.sizes.leftMenu.height};
      background-image: url(${Logo});
      background-repeat: no-repeat;
      background-position: center;
      background-size: auto 3.5rem;
    }
  `}
`;

export default Wrapper;
