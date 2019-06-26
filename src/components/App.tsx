import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUtensils, faBed, faBath } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Item from "./Item";
import useData from "../lib/useData";

library.add(faUtensils, faBed, faBath);

const GrobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: sofia-pro, 'Lato', Helvetica, '游ゴシック', 'Yu Gothic', YuGothic, 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, 'メイリオ', sans-serif;
  }
  li {
    list-style-type: none
  }
`;

const Main = styled.div`
  height: calc(100vh - 70px);
  padding-top: 30px;
  background: #f5f5f5;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    width: 100%;
  }

  .reset {
    height: 40px;
    width: 50%;
    margin: 40px auto 0;
    background: #0272bb;
    color: #fff;
    border: 1px solid #f5f5f5;
    border-radius: 7px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  }
`;

const App = () => {
  const data = useData();

  return (
    <div>
      <GrobalStyles />
      <Header />
      <Main>
        <ul>
          {data.map((item, i) => (
            <Item key={i} data={item} />
          ))}
        </ul>
        <button className="reset" onClick={() => window.localStorage.clear()}>
          すべてをリセット
        </button>
      </Main>
    </div>
  );
};

export default App;
