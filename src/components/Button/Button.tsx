import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: 0;
  padding: 8px 14px;
  transition: .3s;
  ${({ theme, variant }) => {
    
    return {
      background: theme.colors[variant].main,
      color: theme.colors[variant].text,
      ':hover': {
        background: theme.colors[variant].light,
      },
      ':focus': {
        background: theme.colors[variant].dark,
      }
    }
  }}
`;

interface ButtonProps  {
  /** Essa prop é baseada nas cores do temaa, confira o tema adicionado a prop para mais detalhes. */
  variant?: 'primary' | 'ascent';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <StyledButton
      {...props}
    >
      {children}
    </StyledButton>
  );
}

Button.deFaultProps = {
  deisabled: false,
}
