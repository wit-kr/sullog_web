import { Wrapper } from '@components/domain/hamburger/button/styles';

type buttonProps = {
  title: string;
  onClick: () => void;
};

const Button = ({ title, onClick }: buttonProps) => (
  <Wrapper onClick={onClick}>{title}</Wrapper>
);

export default Button;
