import { StyledContainer } from '../Header/Header.styled';
import { StyledFooter, StyledIconHeart } from './Footer.styled';
import { ModalTeam } from './ModalTeam/ModalTeam';
import { OpenModalTeamBtn } from './OpenModalTeamBtn/OpenModalTeamBtn';

export function Footer() {
  return (
    <>
      <StyledFooter>
        <StyledContainer style={{ justifyContent: 'center' }}>
          <ul className="list">
            <li className="item">© 2023 | All Rights Reserved |&#20;</li>
            <li className="item">
              Developed
              <StyledIconHeart />
              by <OpenModalTeamBtn>REACTive</OpenModalTeamBtn>
            </li>
          </ul>
        </StyledContainer>
      </StyledFooter>
      <ModalTeam />
    </>
  );
}
