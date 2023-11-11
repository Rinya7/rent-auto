//import { useSelector } from 'react-redux';

import { AutoUl, BtnLoad } from './CatalogList.styled';
import { useLazyFetchAllRentAutosQuery } from '../../../redux/api';
import CatalogItem from '../CatalogItem/CatalogItem';
import { useEffect } from 'react';
import { useState } from 'react';

const basePagination = {
  page: 1,
  limit: 12,
};

export default function CatalogList() {
  const [autos, setAutos] = useState([]);
  const [pagination, setPagination] = useState(basePagination);
  const [autoList, setAutoList] = useState(false);

  const [fetchAllRentAutos, { isFetching }] = useLazyFetchAllRentAutosQuery();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllRentAutos(pagination);

        if (data.isSuccess) {
          if (pagination.page === 1) {
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
  }, [fetchAllRentAutos, pagination]);

  const handleLoadMore = () => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      page: prevPagination.page + 1,
    }));
  };

  return (
    <>
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
    </>
  );
}
