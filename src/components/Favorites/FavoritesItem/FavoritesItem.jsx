import PropTypes from 'prop-types';
import {
  ImageGalleryItemImg,
  ImageGalleryItemLi,
  Description,
  Title,
  ParametersUl,
  Li,
  Model,
  Svg,
  Button,
  SvgAdd,
  BtnAdd,
} from './FavoritesItem.styled';
import sprite from '../../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../../redux/rentAutoSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from '../../Modal/Modal';

export default function FavoritesItem({ auto }) {
  const {
    id,
    img,
    model,
    make,
    year,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = auto;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favorites = useSelector((state) => state.rentAuto.favoritesAutos);
  const dispatch = useDispatch();

  const isFavorite = favorites.includes(id);
  const [favoritesChanged, setFavoritesChanged] = useState(false);

  useEffect(() => {
    setFavoritesChanged(true);
    return () => setFavoritesChanged(false);
  }, [favorites]);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <ImageGalleryItemLi>
      <ImageGalleryItemImg src={img} alt={model} />
      <BtnAdd onClick={handleClick}>
        <SvgAdd>
          <use
            href={`${sprite}${!isFavorite ? `#heart` : `#active-heart`}`}
          ></use>
        </SvgAdd>
      </BtnAdd>

      <Description>
        <Title>
          <p>
            {make}
            {make.length < 7 && <Model>{model}</Model>},{year}
          </p>
          <span>{auto.rentalPrice}</span>
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
        <Button onClick={handleModalOpen}>Learn more</Button>
      </Description>
      {isModalOpen && <Modal closeModal={handleModalClose} auto={auto}></Modal>}
    </ImageGalleryItemLi>
  );
}

FavoritesItem.propTypes = {
  auto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
