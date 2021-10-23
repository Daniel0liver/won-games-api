import styled from "styled-components";
import PropTypes from "prop-types";

import Logo from "../../../assets/images/logo-won.svg";

const Wrapper = styled.div`
  background-color: ${(props) =>
    props.theme.main.colors.leftMenu["background-header-link"]};
  height: ${(props) => props.theme.main.sizes.leftMenu.height};

  .leftMenuHeaderLink {
    &:hover {
      text-decoration: none;
    }
  }

  .projectName {
    display: block;
    width: 100%;
    height: ${(props) => props.theme.main.sizes.leftMenu.height};
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 3.5rem;
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        leftMenu: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;
