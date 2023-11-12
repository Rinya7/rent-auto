import styled from '@emotion/styled';

export const ImageGalleryItemLi = styled.li`
  border-radius: 2px;
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  position: relative;
`;

export const ImageGalleryItemImg = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;

  margin-bottom: 14px;
`;

export const BtnAdd = styled.button`
  background: transparent;
  border: 0 solid #000;

  position: absolute;
  top: 14px;
  right: 14px;
  &:hover,
  &:focus {
    transform: scale(1.13);
    cursor: pointer;
  }
`;

export const SvgAdd = styled.svg`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  display: inline-block;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;

export const Description = styled.div``;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #121417;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(24 / 16);
`;

export const Model = styled.span`
  color: #3470ff;
  font-family: Manrope;
`;

export const ParametersUl = styled.div`
  display: block;

  text-align: left;
  margin-bottom: 28px;
  width: 274px;
  height: 40px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  white-space: normal;
`;

export const Li = styled.span`
  margin-right: 6px;
  color: rgba(18, 20, 23, 0.5);

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 12);
`;

export const Svg = styled.svg`
  margin-right: 6px;
  height: 16px;
  width: 1px;
  stroke: rgba(18, 20, 23, 0.1);
`;

export const Button = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;

  font-size: 14px;
  font-weight: 600;
  border: none;
  line-height: calc(20 / 14);
  &:hover,
  &:focus {
    background: #0b44cd;
    transform: scale(1.03);
    cursor: pointer;
  }
`;
