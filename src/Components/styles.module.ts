import styled from "styled-Components";
export const Wrapper = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #c7c7eb, #ccf2dd);
  .todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .todo-item {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #333;
    transition: background-color 0.2s ease;
    display: flex;
    align-items: center;
  }
  .todo-item .icon {
    margin-right: 10px;
    font-size: 18px;
    color: #666;
  }
  .todo-item .button {
    margin-left: auto;
    font-size: 14px;
    color: #fff;
    background-color: #4caf50;
    border: none;
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
  }

  .todo-item:hover {
    background-color: #f2f2f2;
  }
  .todo-item:active {
    background-color: #e6e6e6;
  }
  .todo-item.done {
    text-decoration: line-through;
    color: #666;
  }
`;
