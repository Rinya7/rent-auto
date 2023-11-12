import PropTypes from 'prop-types';
import {
  CloseButton,
  ModalDiv,
  Li,
  Model,
  Overlay,
  ParametersUl,
  RentalButton,
  Svg,
  Title,
  ImageGalleryItemImg,
  SvgClose,
  Description,
  Accessories,
  AccessoriesUl,
  FunctionalitiesUl,
  Age,
  Conditions,
  DivConditions,
} from './Modal.styled';
import sprite from '../../assets/sprite.svg';
import React, { useEffect } from 'react';

export default function Modal({ closeModal, auto }) {
  const {
    img,
    model,
    make,
    year,
    rentalCompany,
    type,
    mileage,
    functionalities,
    accessories,
    rentalConditions,
    rentalPrice,
    description,
  } = auto;

  useEffect(() => {
    const handelKeyDown = (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handelKeyDown);
    return () => {
      window.removeEventListener('keydown', handelKeyDown);
    };
  }, [closeModal]);

  const handleClickOnBackdrop = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeModal();
    }
  };

  const conditions = rentalConditions.split('\n');
  const age = conditions[0].slice(-2);

  return (
    <Overlay onClick={handleClickOnBackdrop}>
      <ModalDiv>
        <CloseButton onClick={closeModal}>
          <SvgClose>
            <use href={`${sprite}#close`}></use>
          </SvgClose>
        </CloseButton>
        <ImageGalleryItemImg src={img} alt={model} />
        <Title>
          <p>
            {make}&nbsp;
            <Model>{model}</Model>,&nbsp;
            {year}
          </p>
        </Title>

        <ParametersUl>
          <Li>{make}</Li>
          <Svg>
            <use href={`${sprite}#vertical`}></use>
          </Svg>
          <Li>{make}</Li>
          <Svg>
            <use href={`${sprite}#vertical`}></use>
          </Svg>
          <Li>{rentalCompany}</Li>
          <Svg>
            <use href={`${sprite}#vertical`}></use>
          </Svg>
          <Li>{type}</Li>
          <Svg>
            <use href={`${sprite}#vertical`}></use>
          </Svg>
          <Li>{model}</Li>
          <Svg>
            <use href={`${sprite}#vertical`}></use>
          </Svg>
          <Li>{mileage}</Li>
          <Svg>
            <use href={`${sprite}#vertical`}></use>
          </Svg>
          <Li>{functionalities[0]}</Li>
        </ParametersUl>

        <Description>{description}</Description>
        <Accessories>Accessories and functionalities:</Accessories>
        <AccessoriesUl>
          {accessories.map((accessory, index) => (
            <React.Fragment key={index}>
              <Li key={index}>{accessory}</Li>
              <Svg>
                <use href={`${sprite}#vertical`}></use>
              </Svg>
            </React.Fragment>
          ))}
        </AccessoriesUl>
        <FunctionalitiesUl>
          {functionalities.map((functionality, index) => (
            <React.Fragment key={index}>
              <Li>{functionality}</Li>
              <Svg>
                <use href={`${sprite}#vertical`}></use>
              </Svg>
            </React.Fragment>
          ))}
        </FunctionalitiesUl>

        <Description>Rental Conditions: </Description>
        <DivConditions>
          <Conditions>
            Minimum age: <Age>{age}</Age>
          </Conditions>
          <Conditions>{conditions[1]}</Conditions>
          <Conditions>{conditions[2]}</Conditions>
          <Conditions>
            Mileage: <Age>{mileage.toLocaleString()}</Age>
          </Conditions>
          <Conditions>
            Price: <Age>{rentalPrice.slice(1)}$</Age>
          </Conditions>
        </DivConditions>

        <RentalButton href="tel:+380730000000">Rental Car</RentalButton>
      </ModalDiv>
    </Overlay>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  auto: PropTypes.shape({
    img: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    rentalConditions: PropTypes.string.isRequired,
    rentalPrice: PropTypes.string.isRequired,
  }).isRequired,
};
