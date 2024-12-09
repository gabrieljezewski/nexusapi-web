import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--white);
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: var(--purple-secondary);
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 40px;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  color: var(--purple-secondary);
  cursor: pointer;
  &:hover {
    color: var(--purple-secondary);
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 40px;
`;

export const Divider = styled.div`
  width: 100%; 
  height: 1px;
  background-color: var(--purple-100);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  gap: 60px;

  .bannerImg {
    width: 30%;
  }
`;

export const TextBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:  center;
  align-items: center;
  width: 30%;
`;

export const ContainerButtonBanner = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0 90px 0;
  background-color: var(--background-white);
`;

export const BoxCards = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;

  .ant-card {
    width: 300px;
    height: 350px;
    border-radius: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-10px);
    }
  }

  .anticon {
    font-size: 36px;
    color: var(--purple-secondary);
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .bannerImg {
    width: 45%;
    height: 800px;
    object-fit: cover;
  }
`;

export const FormWrapper = styled.div`
  width: 55%;
  padding: 0 160px;
`;

export const ButtonForm = styled.div`
  display: flex;
  justify-content: end;
`;

export const Faq = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
  padding: 180px;
  flex-wrap: wrap;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 45%;
`;

export const BoxButton = styled.div`
  margin-top: 20px;
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  min-width: 0;

  .antdCollapse {
    padding: 10px;
    border-radius: 20px;
    border: none;
    background-color: var(--background-white);

    .ant-collapse-header {
      font-weight: bold;
    }

    & .ant-collapse-content {
      background-color: transparent;
    }
  }
`;

export const Footer = styled.div`
  padding: 60px 20px;
  background-color: var(--dark-gray);
`;

export const Newsletter = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding-bottom: 20px;

  .antdInput {
    width: 300px;
    height: 36px;
    border-radius: 16px;
    background-color: var(--gray-50);
  }

  .ant-form-item-required {
    color: var(--white) !important;
  }
`;

export const BoxNewsletter = styled.div`
  width: 20%;

  .ant-typography {
    color: var(--white);
  }
`;

export const DividerFooter = styled.div`
  width: 60%;
  height: 1px;
  margin: 0 auto;
  background-color: var(--white);
`;

export const BoxFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  gap: 140px;
  padding-top: 100px;
`;

export const BoxFooterLeft = styled.div`
  display: flex;
  gap: 30px;
`;

export const BoxFooterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .ant-typography {
    color: var(--white);
  }
`;

export const BoxFooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;

  .ant-typography {
    color: var(--white);
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: end;
  align-items: flex-end;
  gap: 8px;

  .anticon {
    font-size: 24px;
    color: var(--white);
  }
`;