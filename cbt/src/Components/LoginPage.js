import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid, Stack, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grid container sx={{ height: '100vh', mt: 10 }}>
      {/* Image Section */}
      <Grid 
        item 
        xs={false} 
        sm={4} 
        sx={{ 
          backgroundImage: 'url(./logo.png)', // Ensure this is correct
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '100vh', // Changed to fit full height
          mx: 'auto' 
        }} 
      />
      
      {/* Login Form Section */}
      <Grid 
        item 
        xs={12} 
        sm={6} 
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box 
          sx={{ 
            width: '100%', 
            maxWidth: 400, 
            p: 3, 
            border: '1px solid #ccc', 
            borderRadius: 2, 
            backgroundColor: 'white' 
          }}
        >
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
