import CircularProgress from '@mui/material/CircularProgress';

import { FullSizeCenteredFlexBox } from '../styled';

function Loading() {
  return (
    <FullSizeCenteredFlexBox>
      <CircularProgress
        sx={{
          marginTop: `calc(50vh)`,
        }}
      />
    </FullSizeCenteredFlexBox>
  );
}

export default Loading;
