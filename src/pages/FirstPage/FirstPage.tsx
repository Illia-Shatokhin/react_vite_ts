import { FC, ReactElement } from 'react';
import { Container, Title, StyledImage } from './FirstPage.styled';
import example from '../../assets/example.png';

const FirstPage: FC = (): ReactElement => {
  return (
    <Container>
      <Title>First Page</Title>
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default FirstPage;
