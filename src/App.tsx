import React, { useState } from 'react';
import Container from './components/container';
import Box from './components/box';
import ShowButtonsToggle from './components/show-buttons-toggle';
import DisappearingButton, { buttonSides } from './components/disappearing-button';

function App() {
  const [isShowingButtons, setIsShowingButtons] = useState(false);

  return (
    <Container>
      <Box>
        <ShowButtonsToggle
          onClick={() => setIsShowingButtons(!isShowingButtons)}
          isShowingButtons={isShowingButtons}
        >
          {`${isShowingButtons ? 'Hide' : 'Show'} buttons`}
        </ShowButtonsToggle>
        <DisappearingButton
          side={buttonSides.top}
          isShowingButtons={isShowingButtons}
          inactiveColor='#6db322'
          activeColor='#6ed402'
        />
        <DisappearingButton
          side={buttonSides.bottom}
          isShowingButtons={isShowingButtons}
          inactiveColor='#23a095'
          activeColor='#0bd6c5'
        />
      </Box>
    </Container>
  );
}

export default App;
