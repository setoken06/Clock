import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  /* background: linear-gradient(-45deg, #8ec3fc, #b1ccfc); */
   img {
    padding: 8px 16px;
   }
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <img src={"images/logo.png"} height={"48px"} width={"48px"} />
    </Wrapper>
  );
};

export default Header;
