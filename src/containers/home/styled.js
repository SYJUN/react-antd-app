import styled from 'styled-components';

export const CardItem = styled.div`
  width: 25%;
  float: left;
  cursor: pointer;

  &:hover {
    .media-heading {
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
    box-shadow: 1px 0 0 0 #F8F8F8, 0 1px 0 0 #F8F8F8, 1px 1px 0 0 #F8F8F8, 1px 0 0 0 #F8F8F8 inset, 0 1px 0 0 #F8F8F8 inset;
  }

  .media-body {
    text-align: center;
    color: #333;
    padding: 10px 0;
  }
`;