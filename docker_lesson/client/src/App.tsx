import React from 'react';
import Box from '@mui/material/Box';
import {useState, useEffect} from "react";
import {Vote} from "./components /Vote";

const App = (): JSX.Element => {
    const [catVote, setCatVote] = useState<any>(null);
    const [dogVote, setDogVote] = useState<any>(null);

    interface voteObject {
        cats: number;
        dogs: number;
    }

    const getVotes = (url: string) => {
        fetch(url)
            .then(res => res.json() as Promise<voteObject>)
            .then(res => {
                setCatVote(res.cats);
                setDogVote(res.dogs);
            })
    };

    const updateVotes = (url: string, newVote: {}) => {
        if (dogVote !== null && catVote !== null) {
            fetch(url, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(newVote)
            })
                .then(res => res.json())
                .then(res => console.log(res))
        }
    }

    useEffect(() => {
        (async () => {
            await getVotes('/get-scores')
        })()
    }, []);

    useEffect(() => {
        (async () => {
            await updateVotes('/update-scores', {cats: catVote, dogs: dogVote})
        })()
    }, [catVote, dogVote])

    const handleClick = (event: React.MouseEvent) => {
        const eventTarget = event.target as HTMLElement
        const parentElement = eventTarget.parentElement as HTMLDivElement;

        if (eventTarget.className === 'cats' || parentElement.className === 'cats') {
            const newVoteValue: number = 1 + catVote
            setCatVote(newVoteValue)
        }else if (eventTarget.className === 'dogs' || parentElement.className === 'dogs') {
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
                    animals={{firstAnimal: 'Cats', secondAnimal: 'Dogs'}}
                />
            </Box>
        </div>
    );
}

export default App;
