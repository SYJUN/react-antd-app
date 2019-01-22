import styled from 'styled-components';

export const CardItem = styled.div`
  width: 25%;
  float: left;
  cursor: pointer;

  &:hover {
    .media-heading {
      transition: all 0.3s;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
  }

  .media-heading {
    background-color: #F8F8F8;
    padding: 8px 0;
    margin: 0 10px;
    text-align: center;
    font-size: 30px;
    transition: all 0.3s;
  }

  .media-body {
    text-align: center;
    color: #333;
    padding: 10px 0;
  }
`;

export const StyledTaskItem = styled.div`
  width: 50%;
  height: ${props => props.height / 2}px;
  float: left;
  padding: 10px;
  color: #333;

  .content {
    width: 100%;
    height: 100%;
    padding: 10px;
    cursor: pointer;
    background-color: #F8F8F8;
    transition: all 0.3s;

    &:hover {
      transition: all 0.3s;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
  }

  .total {
    color: #459df5;
    font-size: 30px;
    font-weight: 300;
    font-style: normal;
  }
`;

