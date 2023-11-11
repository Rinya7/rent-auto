import { useState } from 'react';
import CatalogList from '../../components/Catalog/CatalogList/CatalogList';
import Filters from '../../components/Catalog/Filter/Filter';
import { Container } from './Catalog.styled';

export default function Catalog() {
  const [filter, setFilter] = useState(null);
  return (
    <Container>
      <Filters onFilterChange={setFilter}></Filters>
      <CatalogList filterValues={filter}></CatalogList>
    </Container>
  );
}
