import {
  ImageGalleryItemImg,
  ImageGalleryItemLi,
  Description,
  Title,
  ParametersUl,
  Li,
  Model,
} from './CatalogItem.styled';

export default function CatalogItem({ auto }) {
  console.log('auto', auto);
  return (
    <ImageGalleryItemLi>
      <ImageGalleryItemImg src={auto.img} alt={auto.model} />

      <Description>
        <Title>
          <p>
            {auto.make}, <Model>{auto.model}</Model>
          </p>
          <span>{auto.make} $</span>
        </Title>

        <ParametersUl>
          <Li>{auto.make}</Li>

          <Li>{auto.make}</Li>
        </ParametersUl>
      </Description>
    </ImageGalleryItemLi>
  );
}
