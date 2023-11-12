import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  margin-right: 18px;
  justify-content: center;
  align-items: flex-end;
  margin: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
  margin-bottom: 8px;
`;

export const Select = styled.select`
  border-radius: 14px;
  border: none;
  background: #f7f7fb;
  width: 224px;

  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;

  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SelectPrice = styled.select`
  border-radius: 14px;
  border: none;
  background: #f7f7fb;
  padding: 14px 0;
  width: 125px;

  &::placeholder {
    padding-left: 18px;
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);
  }
`;

export const InputFrom = styled.input`
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  border-left: none;
  border-top: none;
  border-bottom: none;
  padding: 14px 0;
  width: 160px;
  padding-left: 18px;

  &::placeholder {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);
  }
`;

export const InputTo = styled.input`
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;
  border: none;
  padding: 14px 0;
  width: 160px;
  padding-left: 18px;

  &::placeholder {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);
  }
`;

export const Button = styled.button`
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
`;
