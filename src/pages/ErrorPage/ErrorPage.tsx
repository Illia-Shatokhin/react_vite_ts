import { FC, ReactElement } from 'react';
import { Container, Title } from './ErrorPage.styled';

const ErrorPage: FC = (): ReactElement => {
  return (
    <Container>
      <Title>404</Title>
    </Container>
  );
};

export default ErrorPage;
