import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  cursor: pointer;

  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 16px;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE};
  }
`;
