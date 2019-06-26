import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  background: linear-gradient(-45deg, #8ec3fc, #b1ccfc);
  position: fixed;
  
  p {
    margin-left: 1.5rem;
    color: #fff;
    font-family: Linotte, YuGothic, "Yu Gothic", 游ゴシック体, 游ゴシック, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Roboto, メイリオ, Meiryo, "ＭＳ Ｐゴシック", Osaka, "MS PGothic", Arial, Helvetica, Verdana, sans-serif !important;
    line-height: 70px;
    font-size: 24px;
    letter-spacing: 6px;
  }
}
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <p>MyClock</p>
    </Wrapper>
  );
};

export default Header;
