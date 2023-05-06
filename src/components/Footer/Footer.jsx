import styled from "styled-components";
import logo from "../../assets/images/logo.png";

const StyledFooter = styled.footer`
  width: 100%;
  height: 130px;
  display: flex;  
  margin-top: 10px;
  align-items: center;
  justify-content: space-around;
  border-top: 2px solid #2A7AE4;
  background-color: rgba(0, 0, 0, 1);

  @media (max-width: 768px) {
    display: none;
  } 
`;

const ContainerLogo = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 252px;
  height: 60px;
`;

const ContainerSocialMedia = styled.div`
  flex: 1;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconSocialMedia = styled.img`
  display: flex;
  max-width: 100%;
  &:hover {
    transform: scale(1.1);
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <ContainerLogo >
        <Logo src={logo} alt="Logo SEGEL FLIX" />
      </ContainerLogo>
      
      <ContainerSocialMedia>
        <a href="https://github.com/V-Carvalho" target="_blank">
          <IconSocialMedia
            src="https://skillicons.dev/icons?i=github"
            alt="Logo Github"
          />
        </a>

        <a href="https://www.linkedin.com/in/vinicius-a-carvalho/" target="_blank">
          <IconSocialMedia
            src="https://skillicons.dev/icons?i=linkedin"
            alt="Logo Linkedin"
          />
        </a>
      </ContainerSocialMedia>
    </StyledFooter>
  );
};

export default Footer;
