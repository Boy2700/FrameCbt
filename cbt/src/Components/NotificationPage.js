import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const NotificationPage = () => {
  const notifications = [
    { message: "New exam available on 2024-09-30." },
    { message: "Reminder: Submit your exam results by 2024-10-05." },
    { message: "Upcoming maintenance on 2024-10-01." },
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

      <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
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
