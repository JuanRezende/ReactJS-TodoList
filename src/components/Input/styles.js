import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  > input {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 8px;
    border: 0;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};

    width: 100%;
    padding: 16px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;