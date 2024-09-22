import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';

const ExamResultPage = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh', 
        padding: 2 
      }}
    >
      <Card 
        sx={{ 
          maxWidth: 400, 
          width: '100%', 
          borderRadius: 2, 
          boxShadow: 3 
        }}
      >
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Exam Results
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            You scored: 80%
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Thank you for participating! Click below to view your exam history.
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: '#006400', 
              '&:hover': { backgroundColor: '#004d00' }, 
              width: '100%' 
            }}
          >
            View History
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ExamResultPage;
