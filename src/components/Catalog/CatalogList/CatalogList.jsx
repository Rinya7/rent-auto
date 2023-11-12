import PropTypes from 'prop-types';

import { AutoUl, BtnLoad, Div } from './CatalogList.styled';
import { useLazyFetchAllRentAutosQuery } from '../../../redux/api';
import CatalogItem from '../CatalogItem/CatalogItem';
import { useEffect } from 'react';
import { useState } from 'react';

const baseFilter = {
  page: 1,
  limit: 12,
  make: 0,
  rentalPrice: 0,
  minMileage: 0,
  maxMileage: 0,
};

export default function CatalogList({ filterValues }) {
  const [autos, setAutos] = useState([]);
  const [filter, setFilter] = useState(baseFilter);
  const [autoList, setAutoList] = useState(false);

  const [fetchAllRentAutos, { isFetching }] = useLazyFetchAllRentAutosQuery();
  useEffect(() => {
    if (filterValues) {
      setFilter((prevFilter) => ({
        ...prevFilter,
        make: filterValues.selectedModel,
        rentalPrice: filterValues.selectedPrice,
      }));
    }
  }, [filterValues]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllRentAutos(filter);

        if (data.isSuccess) {
          if (filter.page === 1) {
            setAutos(data.data);
          } else {
            setAutos((prevAutos) => [...prevAutos, ...data.data]);
            if (data.data.length < 12) {
              setAutoList(true);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [fetchAllRentAutos, filter]);

  const handleLoadMore = () => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      page: prevFilter.page + 1,
    }));
  };

  return (
    <>
      <Div>
        <AutoUl>
          {autos.map((auto, index) => (
            <CatalogItem key={index} auto={auto}></CatalogItem>
          ))}
        </AutoUl>
        {!autoList ? (
          <BtnLoad onClick={handleLoadMore} disabled={isFetching || autoList}>
            Load More
          </BtnLoad>
        ) : (
          <p>That all cars for rent</p>
        )}
      </Div>
    </>
  );
}

CatalogList.propTypes = {
  filterValues: PropTypes.object,
};
