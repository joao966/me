import { Box, Card, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Card sx={{ py: 2, px: 3, mt: 5, display: "flex", justifyContent: "center" }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          developy by João Guilherme 
        </Typography>
      </Box>
    </Card>
  );
};

export { Footer };
