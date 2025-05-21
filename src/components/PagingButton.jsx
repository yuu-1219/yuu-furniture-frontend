import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({pages}) {
  return (
    <Stack spacing={2} alignItems="center">
      <Pagination 
        count={pages} 
        defaultPage={1}
        boundaryCount={1}
        variant="outlined" 
        shape="rounded" 
        // style={{display: "flex-end"}}
      />
    </Stack>
  );
}