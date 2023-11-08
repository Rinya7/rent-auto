import styled from '@emotion/styled';
import background from 'src/assets/img/background.jpg';

export const Container = styled.div`
  background-image: url(${background});
  height: 966px;
  justify-content: center;
  display: flex;
  text-align: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;
