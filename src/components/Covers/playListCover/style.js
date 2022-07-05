import styled from "styled-components";

export const CoverWrapper = styled.div`
  width: 200px;
  height: 250px;

  .img {
    height: 200px;
    position: relative;
    img {
      border-radius:12px;
      width: 200px;
      height: 200px;
    }

    &:hover{
      img{
        filter:blur(1.5px);
      }
      .player{
        display:block;
      }
    }


    .player{
      display:none;
      position: absolute;
      transform: translate(-50%,-50%);
      top:50%;
      left:50%;
      background-color:transparent;
      z-index:99;
      filter:blur(0.4px);
    }
    
  }

  .text {
    height: 50px;

    p {
      font-size: 14px;
      font-weight: bold;
      color: white;
    }
  }


`