import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  SearchContainer,
  Label,
  Select,
  SelectPrice,
  InputFrom,
  InputTo,
  Button,
  InputContainer,
  FormGroup,
} from './Filter.styled';

const models = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];

export default function Filter({ onFilterChange }) {
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const priceOptions = Array.from({ length: 6 }, (_, i) => 30 + i * 10);

  const handleSearch = () => {
    const newFilterValues = {
      selectedModel,
      selectedPrice,
      minMileage,
      maxMileage,
    };
    onFilterChange(newFilterValues);
  };

  return (
    <SearchContainer>
      <FormGroup>
        <Label>Car brand:</Label>
        <Select
          value={selectedModel || ''}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          <option value="">Enter the text</option>
          {models.map((model, index) => (
            <option key={index} value={model}>
              {model}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>Price/ 1 hour:</Label>
        <SelectPrice
          value={selectedPrice || ''}
          onChange={(e) => {
            console.log('e.target.value', e.target.value);
            setSelectedPrice(e.target.value);
          }}
        >
          <option value="">To $</option>
          {priceOptions.map((price, index) => (
            <option key={index} value={price}>
              {`${price}$`}
            </option>
          ))}
        </SelectPrice>
      </FormGroup>
      <FormGroup>
        <Label>Сar mileage / km:</Label>
        <InputContainer>
          <InputFrom
            type="number"
            value={minMileage}
            onChange={(e) => setMinMileage(e.target.value)}
            placeholder="From"
          />

          <InputTo
            type="number"
            value={maxMileage}
            onChange={(e) => setMaxMileage(e.target.value)}
            placeholder="To"
          />
        </InputContainer>
      </FormGroup>

      <Button onClick={handleSearch}>Search</Button>
    </SearchContainer>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
