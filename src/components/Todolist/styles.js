import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  margin-top: 45px;
  height: 100%;
`;

export const StyledButton = styled.button`
  background: #C21ADD;
  border: 1px solid black;
  color: white;
  height: 40px;
  width: 123px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.05rem;
  margin-left: 6px;
`;

export const StyledInput = styled.input`
  height: 38px;
  border: 1px solid black;
  padding-left: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  width: 240px;
`;

export const StyledLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.05rem;
  color: #373737;
  margin-bottom: 11px;
`;

export const ListContainer = styled.div`
  margin-top: 45px;
  right: 10px;
  overflow-y: overlay;
  height: 400px;

  @media(min-width: 760px){
    height: 300px;

  }
`;

export const TodoItem = styled.div`
  display:flex;
  width: 360px;
  margin-bottom: 40px;
`;

export const TodoTitle = styled.p`
  margin-left: 8px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: ${(props) => props.status === false ? '#000000' : '#B9B9B9'};
  text-decoration: ${(props) => props.status === false ? null : 'line-through'};
`;