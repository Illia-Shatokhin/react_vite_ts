import { FC, ReactElement } from 'react';
import { Container, Block, Title, StyledLink } from './SecondPage.styled';

const SecondPage: FC = (): ReactElement => {
  return (
    <Container>
      <Block>
        <Title>Second Page</Title>
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
    </Container>
  );
};

export default SecondPage;
