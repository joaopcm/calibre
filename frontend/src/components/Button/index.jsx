import { ButtonWrapper } from './styles';

export default function Button({ children, onClick, backgroundColor = '#636363' }) {
  return (
    <ButtonWrapper onClick={onClick} backgroundColor={backgroundColor}>
      {children}
    </ButtonWrapper>
  );
}