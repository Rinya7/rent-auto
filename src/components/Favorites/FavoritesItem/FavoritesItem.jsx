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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favorites = useSelector((state) => state.rentAuto.favoritesAutos);
  const dispatch = useDispatch();

  const isFavorite = favorites.includes(auto.id);
  const [favoritesChanged, setFavoritesChanged] = useState(false);

  useEffect(() => {
    setFavoritesChanged(true);
    return () => setFavoritesChanged(false);
  }, [favorites]);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(auto.id));
    } else {
      dispatch(addToFavorites(auto.id));
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
      <ImageGalleryItemImg src={auto.img} alt={auto.model} />
      <BtnAdd onClick={handleClick}>
        <SvgAdd>
          <use
            href={`${sprite}${!isFavorite ? `#heart` : `#activeheat`}`}
          ></use>
        </SvgAdd>
      </BtnAdd>

      <Description>
        <Title>
          <p>
            {auto.make}
            {auto.make.length < 7 && <Model>{auto.model}</Model>},{auto.year}
          </p>
          <span>{auto.rentalPrice}</span>
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
        <Button onClick={handleModalOpen}>Learn more</Button>
      </Description>
      {isModalOpen && <Modal closeModal={handleModalClose} auto={auto}></Modal>}
    </ImageGalleryItemLi>
  );
}
