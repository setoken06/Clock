import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { Data } from "../lib/types";

const Wrapper = styled.li`
  width: calc((100% - 16px) / 2);
  background: #fff;
  border-radius: 10px;
  color: #1A171E;
  display: flex;
  flex-flow: nowrap column;
  align-items: flex-start;
  box-shadow: 0px 8px 8px rgba(0,0,0,0.12);
  padding: 16px;
  margin-bottom: 16px;
  box-sizing: border-box;

  :nth-child(odd) {
    margin-right: 16px;
  }

  .label {
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 1.5px;
    margin-bottom: 0.2rem;
  }

  .time {
    font-size: 1.6rem;
    flex-grow: 1;
    text-align: right;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
  }

  .button_area {
    width: 100%;
    text-align: right;

    button {
    height: 60px;
    width: 60px;
    border-radius: 30px;
    background: #611FFF;
    border: 1px solid #611FFF;
    box-shadow: 0px 0px 16px rgba(0,0,0,0.12);

    .icon {
      color: #fff;
      font-size: 1.5rem;
    }
  }
  }
`;

type Props = {
  data: Data;
};

const Item: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <p className="label">{data.text}</p>
      <p className="time">{data.time}</p>
      <div className="button_area">
        <button
          onClick={() => window.localStorage.setItem(data.type, `${Date.now()}`)}
        >
          <Icon className="icon" icon={data.icon} />
        </button>
      </div>
    </Wrapper>
  );
};

export default Item;
