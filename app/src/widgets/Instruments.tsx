import { title } from "process";
import styled from "styled-components";

const InstrumentsBlock = styled.section<{}>`
  margin-top: calc(var(--global-scale) * 84px);
`;
const GridContainer = styled.div<{}>`
  display: grid;
  max-width: calc(var(--global-scale) * 1290px);
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--global-scale) * 30px);
  margin: 0 auto;
`;
const CardItem = styled.div<{}>`
  background: radial-gradient(
    148.61% 147.95% at 17.46% -47.95%,
    rgba(28, 100, 242, 0.38) 9.34%,
    rgba(0, 0, 0, 0) 100%
  );
  border: 1px solid;
  border-image-source: linear-gradient(
    142.87deg,
    #1c64f2 0%,
    rgba(28, 100, 242, 0) 44.17%
  );
  padding: calc(var(--global-scale) * 28px) calc(var(--global-scale) * 24px);
  border-radius: 12px;
`;

const Title = styled.h2<{}>`
  font-family: IBM Plex Sans;
  font-size: calc(var(--global-scale) * 34px);
  font-weight: 600;
  line-height: calc(var(--global-scale) * 44px);
  text-align: center;
`;
const Label = styled.h3<{}>`
  font-family: IBM Plex Sans;
  font-size: calc(var(--global-scale) * 22px);
  font-weight: 600;
  line-height: calc(var(--global-scale) * 29px);
  margin: 0;
  text-align: left;
  color: white;
`;
const Typography = styled.p<{}>`
  font-family: IBM Plex Sans;
  font-size: calc(var(--global-scale) * 16px);
  font-weight: 400;
  line-height: calc(var(--global-scale) * 22px);
  margin: 0;
  margin-top: calc(var(--global-scale) * 16px);
  text-align: left;
  color: white;
`;

const cards = [
  {
    title: "Создание увлекательного контента",
    text: `Вы когда-нибудь мечтали написать интересную книгу или статью, но не знали, с чего начать? ChatGPT отлично справляется с генерацией текстов на любые темы. Опишите ему свою идею - и он создаст увлекательный контент, который захватит внимание читателей.`,
  },
  {
    title: "Решение сложных задач",
    text: `Задачи по математике или программированию иногда кажутся неразрешимыми головоломками. Но не для ChatGPT! Он проанализирует проблему и предложит пошаговое решение. Вы быстро разберетесь в сложных концепциях благодаря его доступным объяснениям.`,
  },
  {
    title: "Разработка и отладка кода",
    text: `ChatGPT может помочь в написании и исправлении кода. Он проанализирует ваш код, найдет ошибки и предложит способы их исправления. Также ChatGPT способен самостоятельно писать код по вашим указаниям - к примеру, для создания веб-сайта или приложения.`,
  },
  {
    title: "Перевод текстов между языками",
    text: `ChatGPT отлично справляется с переводом текстов на десятки языков. Теперь вам не нужно тратить время на поиск переводчика - просто попросите ChatGPT, и он мгновенно переведет любой текст на нужный вам язык.`,
  },
  {
    title: "Помощь в написании резюме",
    text: `Вы ищете новую работу и нуждаетесь в резюме, которое произведет впечатление на работодателя? ChatGPT поможет создать резюме, идеально подходящее под ваши навыки и опыт. Опишите ему желаемую вакансию - и получите готовое резюме в нужном формате.`,
  },
  {
    title: "Виртуальный помощник в жизни",
    text: `Не знаете, как приготовить новое блюдо или спланировать отпуск? Просто спросите ChatGPT! Он выступит в качестве виртуального помощника в повседневных задачах, предоставив полезную информацию и рекомендации в любой сфере жизни.`,
  },
];
const Instruments = () => {
  return (
    <InstrumentsBlock>
      <Title>Возможности ChatGPT</Title>
      <GridContainer>
        {cards.map((card) => (
          <CardItem key={card.title}>
            <Label>{card.title}</Label>
            <Typography>{card.text}</Typography>
          </CardItem>
        ))}
      </GridContainer>
    </InstrumentsBlock>
  );
};

export default Instruments;
