import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .left{
    display: flex;
    .more{
      position: absolute;
      margin-left: 18px;
      bottom: 13px;
    }
  }

  .right{
    .more{
      position: relative;
      top: 28px;
    }
  }

  .title{     
    font-family: "Microsoft Yahei", "Times New Roman", Times, serif;
    color:white;
    font-size:40px;
    }

  .more{
    color:#A1A1A1;
    font-size:15px;
    font-family: "Microsoft Yahei", "Times New Roman", Times, serif;
    &:hover{
      text-decoration:none
    }
  }

`