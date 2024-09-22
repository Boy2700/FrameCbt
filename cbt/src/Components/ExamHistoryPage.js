import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const ExamHistoryPage = () => {
  const examHistory = [
    { exam: "Exam 1", score: "80%" },
    { exam: "Exam 2", score: "75%" },
    // Add more history records as needed
  ];

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column', 
        minHeight: '100vh', 
        padding: 2 
      }}
    >
      {/* Logo Section */}
      <CardMedia
        component="img"
        src="https://www.ngscholars.net/wp-content/uploads/2015/07/fountain-university1-205x300.jpg" // Replace with your logo URL
        alt="Logo"
        sx={{
          width: 100, // Adjust the width of the logo
          height: 'auto', // Maintain aspect ratio
          mb: 2, // Margin below the logo
        }}
      />

      <Typography variant="h5" gutterBottom>
        Exam History
      </Typography>
      <Box sx={{ width: '100%', maxWidth: 600 }}>
        {examHistory.map((record, index) => (
          <Card key={index} sx={{ mb: 2, boxShadow: 2 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6">
                {record.exam}: {record.score}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ExamHistoryPage;
