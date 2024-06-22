import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props: { show: boolean }) => (props.show ? "block" : "none")};
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  z-index: 1001;
  width: 80%;
  max-width: 500px;
  border-radius: 10px;
`;

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    if (show && contentRef.current) {
      const inputElement = contentRef.current.querySelector("input");
      if (inputElement) {
        inputElement.focus();
      }
    }
  }, [show]);

  return (
    <ModalOverlay show={show}>
      <ModalContent ref={contentRef}>
        {children}
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
