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
} from './CatalogItem.styled';
import sprite from '../../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../../redux/rentAutoSlice';
import { selectFavoritesAutos } from '../../../redux/selectors';
import Modal from '../../Modal/Modal';
import { useState } from 'react';

export default function CatalogItem({ auto }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favorites = useSelector(selectFavoritesAutos);
  const dispatch = useDispatch();

  const isFavorite = favorites.includes(auto.id);

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
            href={`${sprite}${!isFavorite ? `#heart` : `#active-heart`}`}
          ></use>
        </SvgAdd>
      </BtnAdd>

      <Description>
        <Title>
          <p>
            {auto.make}&nbsp;
            {auto.make.length < 7 && <Model>{auto.model}</Model>},&nbsp;
            {auto.year}
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

CatalogItem.propTypes = {
  auto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
