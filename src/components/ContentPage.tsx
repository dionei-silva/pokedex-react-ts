import { Paper } from '@mui/material';
import React from 'react';

interface ContentPageProps {
  children: string | React.ReactElement;
}

const ContentPage: React.FC<ContentPageProps> = ({ children }) => {
  return (
    <Paper
      elevation={0}
      sx={{ borderColor: '#000 !important', border: '2px solid', padding: '20px', borderRadius: '10px' }}
    >
      {children}
    </Paper>
  );
};

export default ContentPage;
