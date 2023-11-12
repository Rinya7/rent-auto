import styled from '@emotion/styled';

export const Div = styled.div`
  overflow-y: scroll;
  height: 660px;
  padding-bottom: 25px;
`;

export const AutoUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  margin-bottom: 100px;
`;
export const BtnLoad = styled.button`
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: calc() 24/16; /* 150% */
  text-decoration-line: underline;
  border: none;
  background: none;
  &:hover,
  &:focus {
    transform: scale(1.13);
    cursor: pointer;
  }
`;
