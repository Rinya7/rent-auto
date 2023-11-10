import { useSelector } from 'react-redux';
import { AutoItem } from '../CatalogItem/AutoItem';
import { AutoUl } from './ImageGallery.styled';
import { selectVisibleAutos } from '../../../redux/selectors';
import { useLazyFetchAllRentAutos } from '../../../redux/api';
import { useEffect } from 'react';

const CatalogList = () => {
  const fetchAllRentAutos = useLazyFetchAllRentAutos();

  console.log('fetchAllRentAutos', fetchAllRentAutos);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchAllRentAutos();
        console.log('result.data', result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [fetchAllRentAutos]);

  const autos = useSelector(selectVisibleAutos);
  return (
    <AutoUl>
      {autos.map(({ id, tags, img }) => (
        <AutoItem
          key={id}
          tags={tags}
          img={img}
          onClick={() => {
            console.log('click');
          }}
        ></AutoItem>
      ))}
    </AutoUl>
  );
};

export default CatalogList;
