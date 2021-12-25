import styled from 'styled-components';

type Props = {
  isShowingButtons: boolean
}

const ShowButtonsToggle = styled.button<Props>`
  padding: 10px;
  border-radius: 20px;
  transition: all 200ms ease;
  border: none;
  box-shadow: 0px 2px 3px #9a8e54;
  background-color: ${props => (props.isShowingButtons ? '#ffefa3' : 'white')};
`

export default ShowButtonsToggle;
