import { Button, Grid, Input, Typography } from '@mui/material';

const UserForm = props => {
    console.log("coming from User");
    return (
        <Grid
            container
            sx={{bgcolor: 'white', marginBottom: '30px', display: 'block' }}
            spacing={2} >

            <Grid item xs={12} >
                <Typography component={'h1'} sx={{ color: '#000000' }}>UserForm</Typography>
            </Grid>
            <Grid  item xs={12} sm={6} sx={{ display: 'flex'}}>
                <Typography component={'label'} htmlFor="id" sx={{ color: 'black', marginRight: '20px ', fontSize: '16px', width: '100px',display:'block', }}>ID</Typography>
                <Input type='number'   sx={{ width: '400px' }} value={''} onChange={e => { }} />
            </Grid>
            <Grid  item xs={12} sm={6} sx={{ display: 'flex'}}>
                <Typography component={'label'} htmlFor="id" sx={{ color: 'black', marginRight: '20px ', fontSize: '16px', width: '100px',display:'block', }}>Name</Typography>
                <Input type='text'   sx={{ width: '400px' }} value={''} onChange={e => { }} />
            </Grid>
            <Button
                sx={{ margin: 'auto',
                    marginLeft: '15px',
                    marginTop: '10px',
                    marginBottom: '10px',
                    color: 'black',
                    backgroundColor: 'green',
                    '&:hover': {
                        backgroundColor: 'darkgreen',
                    },
                    '&:active': {
                        backgroundColor: 'darkgreen',
                    },
                    '&:focus': {
                        backgroundColor: 'darkgreen',
                    }
                 }}>Submit</Button>
        </Grid>
    );
}

export default UserForm;