//import { useSelector } from 'react-redux';

import { AutoUl } from './FavoritesList.styled';
import { useLazyFetchAllRentAutosQuery } from '../../../redux/api';
import FavoritesItem from '../FavoritesItem/FavoritesItem';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavoritesAutos } from '../../../redux/selectors';

export default function FavoritesList() {
  const favorites = useSelector(selectFavoritesAutos);
  const [autos, setAutos] = useState([]);

  const [fetchAllRentAutos] = useLazyFetchAllRentAutosQuery();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllRentAutos();

        if (data.isSuccess) {
          const filteredAutos = data.data.filter((auto) =>
            favorites.includes(auto.id),
          );
          setAutos(filteredAutos);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [fetchAllRentAutos, favorites]);

  return (
    <AutoUl>
      {autos.map((auto, index) => (
        <FavoritesItem key={index} auto={auto}></FavoritesItem>
      ))}
    </AutoUl>
  );
}
