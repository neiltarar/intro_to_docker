import React from 'react';
import Box from '@mui/material/Box';
import {useState} from "react";
import {Vote} from "./components /Vote";

const App: React.FC = () => {
    const [catVote, setCatVote] = useState(0);
    const [dogVote, setDogVote] = useState(0);

    const handleClick = (event: React.MouseEvent) => {
        const eventTarget = event.target as HTMLElement
        const parentElement = eventTarget.parentElement as HTMLDivElement;

        if(eventTarget.className === 'cats' || parentElement.className === 'cats'){
            const newVoteValue:number = catVote + 1
            setCatVote(newVoteValue)
        } if (eventTarget.className === 'dogs' || parentElement.className === 'dogs') {
            const newVoteValue:number = dogVote + 1
            setDogVote(newVoteValue)
        }
    }

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
                <Vote
                    catVote={catVote}
                    dogVote={dogVote}
                    handleClick={handleClick}
                    animals={{firstAnimal:'cat', secondAnimal:'dog'}}
                />
            </Box>
        </div>
    );
}

export default App;
