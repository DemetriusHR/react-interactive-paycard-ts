import styled from "styled-components";

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  padding: 50px 15px;
  flex-direction: column;
  
  @media screen and (max-width: 700px), (max-height: 500px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export default AppWrapper;