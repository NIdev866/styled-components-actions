import { useState } from 'react';
import styled, { css } from 'styled-components';

export enum buttonSides {
  top,
  bottom,
}

type StyledProps = Props & {
  isActive: boolean,
}

const StyledDisappearingButton = styled.button<StyledProps>`
  padding: 10px;
  border-radius: 20px;
  transition: all 200ms ease;
  border: none;
  box-shadow: 0 2px 3px #9a8e54;
  position: absolute;
  white-space: nowrap;
  background-color: ${props => props.isActive ? props.activeColor : props.inactiveColor};
  ${props => props.side === buttonSides.top ? css`
    top: 0;
  ` : css`
    bottom: 0;
  `}
  ${props => props.isShowingButtons ? css`
    left: 100%;
    transform: translateX(-100%);
  ` : css`
    left: 160%;
  `}
`

type Props = {
  side: buttonSides,
  isShowingButtons: boolean,
  inactiveColor: string,
  activeColor: string,
}

const DisappearingButton = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledDisappearingButton
      {...props}
      isActive={isActive}
      onClick={() => setIsActive(!isActive)}
    >
      {`Button number ${props.side + 1}`}
    </StyledDisappearingButton>
  );
}

export default DisappearingButton;
