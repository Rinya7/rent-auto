import { Container, Block, Title, StyledLink } from './Favorites.styled';

export default function Favorites() {
  return (
    <Container>
      <Block>
        <Title>Favorites</Title>
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
    </Container>
  );
}
