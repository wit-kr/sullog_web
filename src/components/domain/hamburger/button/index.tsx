import { Wrapper } from '@components/domain/hamburger/button/styles';

type buttonProps = {
  title: string;
};

const Button = ({ title }: buttonProps) => <Wrapper>{title}</Wrapper>;

export default Button;
