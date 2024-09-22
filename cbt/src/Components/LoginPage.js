import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Stack, IconButton, InputAdornment, Card, CardContent } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Image Section */}
      <Box
        component="img"
        src="https://www.ngscholars.net/wp-content/uploads/2015/07/fountain-university1-205x300.jpg"
        alt="Logo"
        sx={{
          display: { xs: 'none', sm: 'block' }, // Hide on small screens
          width: { xs: '50%', sm: '20%', }, // Increased sizes for better visibility
          height: 'auto', // Maintain aspect ratio
          maxHeight: '800px', // Increased max height
          objectFit: 'cover',
        }}
      />

      {/* Login Card Section */}
      <Card sx={{ maxWidth: 400, zIndex: 2 }}>
        <CardContent>
          <Typography variant="h4" align="center">Login</Typography>
          <Stack spacing={2} sx={{ mt: 2 }}>
            <TextField label="Username" variant="outlined" fullWidth />
            <TextField 
              label="Password" 
              type={showPassword ? 'text' : 'password'} 
              variant="outlined" 
              fullWidth 
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={(event) => event.preventDefault()}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button 
              variant="contained" 
              sx={{ backgroundColor: '#006400', '&:hover': { backgroundColor: '#004d00' } }} 
              fullWidth
            >
              Login
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
