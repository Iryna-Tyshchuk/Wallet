import styled from 'styled-components';

export const StyledHeader = styled.header`
  grid-area: header;
  background-color: ${({ theme }) => theme.color.bg_white};
  width: 100vw;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 480px;
  height: 60px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    height: 80px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
  }
`;

export const StyledLogo = styled.div`
  font-family: Poppins;
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.l};
  line-height: ${({ theme }) => theme.lineHeights.body};
  color: ${({ theme }) => theme.color.text_dark};
  & svg {
    height: 30px;
    width: 30px;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    & svg {
      height: 40px;
      width: 40px;
    }
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: ${({ theme }) => theme.lineHeights.body};
  color: ${({ theme }) => theme.color.text_grey_balance};

  @media screen and (min-width: 768px) {
    gap: 12px;
  }
`;

export const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: ${({ theme }) => theme.lineHeights.body};
  color: ${({ theme }) => theme.color.text_grey_balance};

  @media screen and (min-width: 768px) {
    gap: 12px;
  }
`;

export const Separator = styled.div`
  background-color: ${({ theme }) => theme.color.text_grey_balance};
  width: 1px;
  height: 30px;
`;
