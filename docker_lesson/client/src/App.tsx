import React from 'react';
import Box from '@mui/material/Box';
import {useState, useEffect} from "react";
import {Vote} from "./components /Vote";

const App = (): JSX.Element => {
    const [catVote, setCatVote] = useState(0);
    const [dogVote, setDogVote] = useState(0);

    const getVotes = () => {
        fetch('/voting-scores', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setCatVote(res.cats);
                setDogVote(res.dogs);
            });
    };

    useEffect(getVotes, []);

    const handleClick = (event: React.MouseEvent) => {
        const eventTarget = event.target as HTMLElement
        const parentElement = eventTarget.parentElement as HTMLDivElement;

        if (eventTarget.className === 'cats' || parentElement.className === 'cats') {
            const newVoteValue: number = catVote + 1
            setCatVote(newVoteValue)
        }
        if (eventTarget.className === 'dogs' || parentElement.className === 'dogs') {
            const newVoteValue: number = dogVote + 1
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
                    animals={{firstAnimal: 'cat', secondAnimal: 'dog'}}
                />
            </Box>
        </div>
    );
}

export default App;
