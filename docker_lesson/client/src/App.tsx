import React from 'react';
import Box from '@mui/material/Box';
import Vote from "./components /Vote";

function App() {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <Box
                sx={{
                    display: 'grid',
                    bgcolor: 'grey.200',
                    color: 'grey.800',
                    border: '1px solid',
                    p: 1,
                    borderRadius: 2,
                    fontSize: '24pt',
                    fontWeight: '600',
                    margin: '100px'
                }}
            >
                <Vote />
            </Box>
        </div>
    );
}

export default App;
