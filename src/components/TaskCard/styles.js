import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 12px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 0.875rem;

  input {
    display: none;
  }

  label {
    display: flex;
    gap: 12px;
    align-items: center;

    cursor: pointer;
  }

  input + label:before {
    content: "";

    display: inline-block;

    border-radius: 100%;
    border: 2px solid ${({ theme }) => theme.COLORS.BLUE};

    width: 18px;
    height: 18px;
  }

  input:checked + label:before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 9 7' fill='none'%3E%3Cpath d='M7.93059 0.342093L3.59865 4.67403L1.11618 2.19156L0.280273 3.02747L3.59865 6.34584L8.76649 1.178L7.93059 0.342093Z' fill='%23F2F2F2'/%3E%3C/svg%3E");

    background-position: center;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
    border: 2px solid ${({ theme }) => theme.COLORS.PURPLE_DARK};
  }

  input:checked + label span {
    text-decoration: line-through;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  padding: 16px;

  button,
  input,
  img {
    cursor: pointer;
  }

  button {
    background: none;
    border: none;

    transition: all 0.3s;
    min-width: 40px;

    &:hover {
      background: ${({ theme }) => theme.COLORS.GRAY_400};
      border-radius: 4px;

      svg {
        path {
          fill: ${({ theme }) => theme.COLORS.DANGER};
        }
      }
    }
  }
`;
