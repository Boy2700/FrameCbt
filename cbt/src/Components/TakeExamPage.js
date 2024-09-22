import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Radio, FormControlLabel, RadioGroup } from '@mui/material';

const TakeExamPage = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 14, padding: 2 }}>
      {/* Timer */}
      <Typography variant="h4" sx={{ mb: 3 }}>
        Time Left: {formatTime(timeLeft)}
      </Typography>

      {/* Exam Content */}
      <Box sx={{ textAlign: 'center', maxWidth: 600, width: '100%', padding: 3, border: '1px solid #ccc', borderRadius: 2, backgroundColor: 'white' }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Exam Title</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>Question 1: What is ...?</Typography>

        <RadioGroup>
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
          <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
        </RadioGroup>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button variant="outlined" sx={{ color: '#006400', borderColor: '#006400' }}>
            Previous
          </Button>
          <Button variant="outlined" sx={{ color: '#006400', borderColor: '#006400' }}>
            Next
          </Button>
          <Button variant="outlined" sx={{ color: '#006400', borderColor: '#006400' }}>
            Submit Answer
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TakeExamPage;
