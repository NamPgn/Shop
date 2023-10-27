import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: "20px", width: "100%" }}>
      <CircularProgress />
    </Box>
  );
}