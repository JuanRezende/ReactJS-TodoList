import styled from "styled-components";

export const SectionMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Completed = styled.div`
  strong {
    color: ${({ theme }) => theme.COLORS.PURPLE};
  }

  span {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    padding: 2px 8px;
    border-radius: 16px;
    font-weight: bold;
  }
`;

export const CreatedTasks = styled.div`
  strong {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  span {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    padding: 2px 8px;
    border-radius: 16px;
    font-weight: bold;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Section = styled.section`
  width: 100%;
`;

export const TaskBox = styled.div`
  display: flex;
  gap: 8px;

  width: 100%;
  margin-bottom: 64px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 736px;
  height: 100%;

  margin: 0 auto;
  padding: 72px 0;

  > img {
    margin-bottom: 53px;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};

    width: 100%;
    height: 200px;
  }

  @media (max-width: 1200px) {
    ${Container} {
      padding: 72px 16px;
    }

    ${SectionMain} {
      text-align: center;
    }
  }
`;
