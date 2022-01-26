import React from 'react';
import Box from '@mui/material/Box';
import { Link, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ bgcolor: 'background.paper', p: 6, marginTop: 'auto' }} component="footer">
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {' '}
      <Link color="inherit" href="mailto:michal.cesarczyk@gmail.com">
        MCesarczyk
      </Link>
    </Typography>
  </Box>
);

export default Footer;