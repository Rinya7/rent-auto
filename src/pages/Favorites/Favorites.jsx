import { Container, Block, Title, StyledLink } from './Favorites.styled';

const Favorites = () => {
  return (
    <Container>
      <Block>
        <Title>Favorites</Title>
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
    </Container>
  );
};

export default Favorites;
