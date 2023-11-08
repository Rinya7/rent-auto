import { ImageGalleryItemImg, ImageGalleryItemLi } from './AutoItem.styled';

export const AutoItem = ({ img, tags }) => {
  return (
    <ImageGalleryItemLi>
      <ImageGalleryItemImg src={img} alt={tags} />
    </ImageGalleryItemLi>
  );
};
