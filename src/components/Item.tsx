import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { Data } from "../lib/types";

const Wrapper = styled.li`
  height: 80px;
  width: 80vw;
  margin: 15px auto 0;
  padding: 0 5%;
  background: #fff;
  border-radius: 10px;
  color: #333;
  display: flex;
  align-items: center;

  .label {
    font-size: 0.8rem;
    margin-right: 5px;
    font-weight: bold;
    letter-spacing: 1.5px;
  }

  .time {
    padding-right: 5%;
    font-size: 2rem;
    flex-grow: 1;
    text-align: right;
    letter-spacing: 2px;
  }

  button {
    height: 60px;
    width: 60px;
    border: 1px solid #f5f5f5;
    border-radius: 30px;
    background: #8ec3fc;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);

    .icon {
      color: #fff;
      font-size: 1.5rem;
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
      <button
        onClick={() => window.localStorage.setItem(data.type, `${Date.now()}`)}
      >
        <Icon className="icon" icon={data.icon} />
      </button>
    </Wrapper>
  );
};

export default Item;
