//import { useSelector } from 'react-redux';

import { AutoUl } from './CatalogList.styled';
import { useLazyFetchAllRentAutosQuery } from '../../../redux/api';
import CatalogItem from '../CatalogItem/CatalogItem';
import { useEffect } from 'react';
import { useState } from 'react';

export default function CatalogList() {
  const [autos, setAutos] = useState([]);
  const [fetchAllRentAutos] = useLazyFetchAllRentAutosQuery();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllRentAutos();
        if (data.isSuccess) {
          setAutos(data.data);
        }
        //console.log('data', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [fetchAllRentAutos]);

  console.log('autos', autos);

  return (
    <AutoUl>
      {autos.map((auto, index) => (
        <CatalogItem
          key={index}
          auto={auto}
          onClick={() => {
            console.log('click');
          }}
        ></CatalogItem>
      ))}
    </AutoUl>
  );
}
