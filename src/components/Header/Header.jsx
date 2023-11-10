import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import sprite from '../../assets/sprite.svg';

export default function Header() {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Home
        </StyledLink>
        <StyledLink to="/catalog">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Catalog
        </StyledLink>
        <StyledLink to="/favorites">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Favorites
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
}
