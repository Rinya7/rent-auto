import { useDispatch, useSelector } from 'react-redux';
import { AutoItem } from '../CatalogItem/AutoItem';
import { AutoUl } from './ImageGallery.styled';
import { addAuto } from '../../../redux/rentAutoSlice';
import { selectVisibleAutos } from '../../../redux/selectors';
import { useEffect } from 'react';

const CatalogList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAutos());
  }, [dispatch]);
  const autos = useSelector(selectVisibleAutos);
  return (
    <AutoUl>
      {autos.map(({ id, tags, img }) => (
        <AutoItem
          key={id}
          tags={tags}
          img={img}
          onClick={() => dispatch(addAuto(id))}
        ></AutoItem>
      ))}
    </AutoUl>
  );
};

export default CatalogList;
