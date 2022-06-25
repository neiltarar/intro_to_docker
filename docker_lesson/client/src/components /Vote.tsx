import '../Vote.css'
import React from 'react'
import Grid from '@mui/material/Grid';

interface Animals {
    firstAnimal: string;
    secondAnimal: string;
}

interface Props {
    catVote: number;
    dogVote: number;
    handleClick: (event: React.MouseEvent) => void;
    animals?: Animals;
}

export const Vote: React.FC<Props> = ({
                                          catVote,
                                          dogVote,
                                          handleClick,
                                          animals
                                      }) => {
    return (
        <section className={'vote-section'}>
            <h1>Cats vs Dogs!</h1>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
            >
                <div onClick={handleClick} className={'cats'}>
                    <p>{animals?.firstAnimal}</p>
                    <p>{catVote}</p>
                </div>
                <div onClick={handleClick} className={'dogs'}>
                    <p>Dogs</p>
                    <p>{dogVote}</p>
                </div>
            </Grid>
        </section>
    )
};

