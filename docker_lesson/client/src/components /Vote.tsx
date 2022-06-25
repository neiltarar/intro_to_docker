import '../Vote.css'
import Grid from '@mui/material/Grid';

export default function Vote() {
    return (
        <section className={'vote-section'}>
            <h1>Cats vs Dogs!</h1>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
            >
                <div className={'cats'}>
                    <p>Cats</p>
                    <p>1</p>
                </div>
                <div className={'dogs'}>
                    <p>Dogs</p>
                    <p>0</p>
                </div>
            </Grid>
        </section>
    )
};