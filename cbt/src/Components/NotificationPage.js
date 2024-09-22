import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const NotificationPage = () => {
  const notifications = [
    { message: "New exam available on 2024-09-30." },
    { message: "Reminder: Submit your exam results by 2024-10-05." },
    { message: "Upcoming maintenance on 2024-10-01." },
    // Add more notifications as needed
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
      <Typography variant="h5" gutterBottom>
        Notifications
      </Typography>
      <Box sx={{ width: '100%', maxWidth: 600 }}>
        {notifications.map((notification, index) => (
          <Card key={index} sx={{ mb: 2, boxShadow: 2 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="body1">
                {notification.message}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default NotificationPage;
