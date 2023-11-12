import styled from '@emotion/styled';

import ManropeMedium from './assets/fonts/Manrope-Medium.ttf';
import ManropeRegular from './assets/fonts/Manrope-Regular.ttf';
import ManropeSemiBold from './assets/fonts/Manrope-SemiBold.ttf';

import emotionNormalize from 'emotion-normalize';

export const AppWrapper = styled.div`
  ${emotionNormalize}

  @font-face {
    font-family: 'Manrope';
    font-weight: 400;
    src: url(${ManropeRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Manrope';
    font-weight: 500;
    src: url(${ManropeMedium}) format('truetype');
  }

  @font-face {
    font-family: 'Manrope';
    font-weight: 600;
    src: url(${ManropeSemiBold}) format('truetype');
  }
`;
