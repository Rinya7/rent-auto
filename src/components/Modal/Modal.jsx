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

  const {
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = auto;
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
        <ImageGalleryItemImg src={auto.img} alt={auto.model} />
        <Title>
          <p>
            {auto.make}&nbsp;
            <Model>{auto.model}</Model>,&nbsp;
            {auto.year}
          </p>
        </Title>

        <ParametersUl>
          <Li>{auto.make}</Li>
          <Svg>
            <use href={`${sprite}#vertical`}></use>
          </Svg>
          <Li>{auto.make}</Li>
          <Svg>
            <use href={`${sprite}#vertical`}></use>
          </Svg>
          <Li>{auto.rentalCompany}</Li>
          <Svg>
            <use href={`${sprite}#vertical`}></use>
          </Svg>
          <Li>{auto.type}</Li>
          <Svg>
            <use href={`${sprite}#vertical`}></use>
          </Svg>
          <Li>{auto.model}</Li>
          <Svg>
            <use href={`${sprite}#vertical`}></use>
          </Svg>
          <Li>{auto.mileage}</Li>
          <Svg>
            <use href={`${sprite}#vertical`}></use>
          </Svg>
          <Li>{auto.functionalities[0]}</Li>
        </ParametersUl>

        <Description>{auto.description}</Description>
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
