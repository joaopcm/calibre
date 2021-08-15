import styled from 'styled-components';

export const Layout = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
      margin-bottom: 2rem;
      background-color: #ebebeb;
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: 2px solid #bba5a5;
      width: 450px;
      line-height: 1.5rem;
    }
  }
`;