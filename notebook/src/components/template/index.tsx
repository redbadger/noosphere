import React from 'react';
import { FlexBox, Box, Progress } from 'spectacle';

const template = () => (
  <FlexBox justifyContent="center" position="absolute" bottom={0} width={1}>
    <Box padding="0 1em">
      <Progress size={5} color="black" />
    </Box>
  </FlexBox>
);

export default template;
