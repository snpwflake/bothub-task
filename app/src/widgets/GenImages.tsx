import styled from "styled-components";
import Button from "../features/Button";
import image from "../images/image.webp";
const Grid = styled.div<{}>`
  width: 100%;
  padding-top: calc(var(--global-scale) * 84px);
  max-width: calc(var(--global-scale) * 1290px);
  margin: 0 auto;
  display: grid;
  grid-gap: calc(var(--global-scale) * 30px);
  grid-template-columns: repeat(2, 1fr);
  & > img {
    width: 100%;
    object-fit: contain;
    @media (max-width: 1060px) {
      max-width: calc(var(--global-scale) * 350px);
      margin: 0 auto;
    }
  }
  @media (max-width: 1060px) {
    grid-template-columns: 1fr;
  }
`;

const Container = styled.div<{}>`
  display: flex;
  width: 100%;
  justify-content: right;
  align-items: center;
  @media (max-width: 1060px) {
    text-align: center;
    justify-content: center;
  }
`;
const MidJorneyBlock = styled.div<{}>`
  max-width: calc(var(--global-scale) * 540px);
  width: 100%;
  & > h2 {
    margin: 0;
    font-family: IBM Plex Sans;
    font-size: calc(var(--global-scale) * 34px);
    font-weight: 600;
    line-height: calc(var(--global-scale) * 44px);
  }
  & > p {
    margin: calc(var(--global-scale) * 20px) 0;
    font-family: IBM Plex Sans;
    font-size: calc(var(--global-scale) * 16px);
    font-weight: 400;
    line-height: calc(var(--global-scale) * 22px);
  }

  @media (max-width: 1060px) {
    max-width: 100%;
  }
`;
const GenImages = () => {
  return (
    <Grid>
      <img src={image} alt="" />
      <Container>
        <MidJorneyBlock>
          <h2>Генерация Изображений Через Midjourney </h2>
          <p>
            MidJourney - инструмент для создания уникальных изображений. Наши
            алгоритмы помогут вам воплотить в жизнь вашу идею. Начните
            генерировать изображения с MidJourney прямо сейчас! Кликните на
            кнопку ниже, чтобы начать творить.
          </p>
          <Button size="sm">Попробовать Midjourney</Button>
        </MidJorneyBlock>
      </Container>
    </Grid>
  );
};

export default GenImages;
