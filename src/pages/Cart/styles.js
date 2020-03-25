import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  footer {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    button {
      background: #48a0dc;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      padding: 12px 20px;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#48a0dc')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    padding: 12px;
    text-align: left;
  }
  tbody td {
    border-bottom: 1px solid #eee;
    padding: 12px;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
  }

  div {
    align-items: center;
    display: flex;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;
export const Total = styled.div`
  align-items: baseline;
  display: flex;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
