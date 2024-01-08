import React from 'react';
import styled from 'styled-components';

const Portfolio = () => {
  return (
    <Container id='portfolio'>
      <Header>| Portfolio</Header>

      <Content>
        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2cfedb05644cc38f3870f3524300a58ea857beaebb18c7874273c49892d1e06?apiKey=5df38762550747f195b486091ee5df26&" alt="Portfolio" loading="lazy" />
        
        <InfoColumn>
          <Info>
            <Title> Business <br /> Management <br /> Tool <span>{"{"}</span>BMT<span>{"}"}</span> </Title>
            <Description>
              Le BMT est un outil de gestion et   management, concu par Alpha. Cet outil est adapté aux TPE, PME et GE. Il répond  a tous les besoins de la gestion, l'administration, gestion de stock, gestion de RH et bien d'autres.
            </Description>

              <ButtonsContainer>
                 <ButtonWrapper>
                 <Button> Learn more </Button> 
                  <ContactUsButton> Contact Us </ContactUsButton> 
                  </ButtonWrapper>
              </ButtonsContainer>

              


          </Info>
        </InfoColumn>
        
      
        <ImageColumn>
          <ImageContainer>
            <Image2 srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d55e3325062220583ef79dfd898453674116e9247dc4d6bae077c2823bf29804?apiKey=5df38762550747f195b486091ee5df26&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d55e3325062220583ef79dfd898453674116e9247dc4d6bae077c2823bf29804?apiKey=5df38762550747f195b486091ee5df26&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d55e3325062220583ef79dfd898453674116e9247dc4d6bae077c2823bf29804?apiKey=5df38762550747f195b486091ee5df26&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d55e3325062220583ef79dfd898453674116e9247dc4d6bae077c2823bf29804?apiKey=5df38762550747f195b486091ee5df26&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d55e3325062220583ef79dfd898453674116e9247dc4d6bae077c2823bf29804?apiKey=5df38762550747f195b486091ee5df26&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d55e3325062220583ef79dfd898453674116e9247dc4d6bae077c2823bf29804?apiKey=5df38762550747f195b486091ee5df26&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d55e3325062220583ef79dfd898453674116e9247dc4d6bae077c2823bf29804?apiKey=5df38762550747f195b486091ee5df26&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d55e3325062220583ef79dfd898453674116e9247dc4d6bae077c2823bf29804?apiKey=5df38762550747f195b486091ee5df26&"alt="Image 2" loading="lazy" />
          </ImageContainer>
        </ImageColumn>
        
      </Content>
      <ImageDescription>1/4</ImageDescription>
        
    </Container>
  );
};


 
const Container = styled.div`
 box-sizing: border-box;
  background-color: #160041;
  align-self: stretch;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  padding: 50px 0 5px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Header = styled.div`
  color: #fafafa;
  white-space: nowrap;
  padding: 54px 0 0 34px;
  font: 600 18px Inter, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 04px 0 0 14px;
  }
`;

const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 676px;
  margin-top: 5px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  /* padding: 21px 0px; */

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
    flex-direction: column;
  }
`;

const Image = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 34%;
  padding-left: 44px;

  @media (max-width: 991px) {
    width: 100%;
  padding-left: 0px;
  }
`;

const Info = styled.div`
  position: relative;
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  margin-top: 61px;

  flex-direction: column;

  @media (max-width: 991px) {
    margin-top: 40px;
    flex-direction: column;
  }
`;

const Title = styled.div`
  background: linear-gradient(90deg, #18bcff 0.97%, #06f 94.77%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: 600 48px Inter, sans-serif;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Description = styled.div`
  color: #fafafa;
  margin-top: 42px;
  font: 400 18px Inter, sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
    width: 100%;
    max-width:80%;
  }
`;

const ButtonsContainer = styled.div`
 display: flex;
 gap: 10px; 

 @media (max-width: 991px) {
  display: flex;
  gap: 10px; 
  padding-top: 10px;
}
@media (max-width:768px) {
  width: 100%;
}
`;

const ButtonWrapper = styled.div`
 display: flex;
 align-items: flex-start;
 justify-content: flex-start;
 width: 100%;
 gap:14px;
 padding-top: 28px;
 padding-left: 0 !important;

 @media (max-width: 991px) {
  padding: 10px;
 gap: 10px;
 width: 40%;
 justify-content:flex-start;
}
@media (max-width:768px) {
  width: 100%;
}
`;


const Button = styled.button`
  color: #160041;
  white-space: nowrap;
  border-radius: 10px;
  background-color: #fafafa;
  height: 34px;
  width: 50%;
  text-align: center;
  justify-content: center;
  font: 600 16px Inter, sans-serif;

  
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const ContactUsButton = styled(Button)`
 background-color: #0066FF;
 color: #ffffff; 
`;


const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 66%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Image2 = styled.img`
  aspect-ratio: 1.25;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ImageDescription = styled.div`
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px 0px;
  font: 500 20px Inter, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const OtherDiv = styled.div`
  position: relative;
`;

export default Portfolio;