import { font, spacing } from '@styles';
import styled, { css } from 'styled-components';
import ModalPortal from './HOC/ModalPortal';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

const Modal: React.FC<Props> = ({ isOpen, children, closeModal }) => {
  return (
    <ModalPortal>
      <StyledModal isOpen={isOpen}>
        <header>
          <button onClick={() => closeModal()}>X</button>
        </header>
        <main>{isOpen && children}</main>
      </StyledModal>
    </ModalPortal>
  );
};

export default Modal;

const StyledModal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 110%;
  height: 100%;
  width: 100%;
  background-color: white;
  padding: ${spacing.sm};

  header {
    display: flex;
    justify-content: flex-end;

    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
      font-size: ${font.size.big};
      font-weight: ${font.weight.bold};
      transition: 0.2s;

      &:hover {
        color: gray;
      }
    }
  }

  transition: 0.5s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      top: 80px;
    `}
`;
