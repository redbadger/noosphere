import React from 'react';
import { FlexBox, Box, Progress, FullScreen, TemplateFn } from 'spectacle';

const template: TemplateFn = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen size={20} color="black" />
    </Box>
    <Box padding="1em">
      <Progress size={25} color="black" />
    </Box>
  </FlexBox>
);

export default template;
