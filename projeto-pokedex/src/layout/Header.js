import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { GlobalContext } from '../context/GlobalContext';
import { useHistory } from 'react-router-dom';
import { goToPokedex } from '../router/coordinator';



const Header = ({ leftButton, rightButton }) => {
    const { title } = useContext(GlobalContext)
    const history = useHistory()

    const leftButtonTitle = () => {
        switch (title) {
            case "Lista de Pokémons":
                return "Ir para Pokédex";
            case "POKÉDEX":
                return "Voltar para lista de pokémons";
            default:
                return "Voltar";
        }
    };
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Button
                        variant='text'
                        color='secondary'
                        onClick={leftButton}>
                        {leftButtonTitle()}
                    </Button>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'unset' } }}>

                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex' } }}
                    >
                        {title}
                    </Typography>

                    {rightButton && (
                        <Button
                            variant='text'
                            color='secondary'
                            onClick={() => goToPokedex(history)}>
                            Ir para Pokédex
                        </Button>
                    )}

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;