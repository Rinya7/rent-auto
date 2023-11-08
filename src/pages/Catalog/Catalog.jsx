import { Container, Block, Title, StyledLink } from './Catalog.styled';

const Catalog = () => {
  return (
    <Container>
      <Block>
        <Title>Catalog</Title>
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
    </Container>
  );
};

export default Catalog;
