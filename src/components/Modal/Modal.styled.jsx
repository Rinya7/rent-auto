import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalDiv = styled.div`
  position: fixed;
  width: 541px;

  border-radius: 24px;
  background: #fff;
  padding: 40px 40px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: 0 solid #fff;
  position: absolute;
  top: 16px;
  right: 12px;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.13);
    cursor: pointer;
  }
`;

export const SvgClose = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: inline-block;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;

export const ImageGalleryItemImg = styled.img`
  width: 100%;
  height: 314px;
  margin-bottom: 14px;
  border-radius: 14px;
  background: #f3f3f2;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);
`;

export const Model = styled.span`
  color: #3470ff;
`;

export const ParametersUl = styled.div`
  display: block;
  text-align: left;
  margin-bottom: 14px;
  width: 277px;
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
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);
`;

export const Svg = styled.svg`
  margin-right: 6px;
  height: 16px;
  width: 1px;
  stroke: rgba(18, 20, 23, 0.1);
`;

export const Description = styled.p`
  text-align: left;
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: calc(20 / 14);
  margin-bottom: 24px;
`;
export const Accessories = styled.p`
  text-align: left;
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: calc(20 / 14);
`;

export const AccessoriesUl = styled.div`
  display: block;
  text-align: left;
`;

export const FunctionalitiesUl = styled.div`
  display: block;
  text-align: left;
  margin-bottom: 24px;
`;

export const DivConditions = styled.div`
  display: inline-block;
  text-align: left;
  margin-bottom: 24px;
`;

export const Conditions = styled.p`
  display: inline-block;
  text-align: left;
  padding: 7px 14px;
  margin-right: 8px;
  border-radius: 35px;
  background: #f9f9f9;
`;

export const Age = styled.span`
  color: #3470ff;
`;

export const RentalButton = styled.a`
  /*display: inline-flex;*/
  padding: 12px 50px;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
`;
