import React from "react";
import { 
    AppBar, 
    Toolbar, 
    Typography,
    Container,
    Grid,
} from "@material-ui/core";

class NavBar extends React.Component {
    render() {
        return (
            <AppBar position="static">
                <Container maxwidth="lg">
                    <Toolbar disableGutters>
                        <Grid container spacing={4} justifyContent="flex-start">
                            <Grid item>
                                <Typography 
                                    variant="h6"
                                    component="a"
                                    href="/"
                                >
                                    홈으로
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography 
                                    variant="h6"
                                >
                                    blank
                                </Typography>
                            </Grid>
                                <Grid item>
                                <Typography 
                                    variant="h6"
                                >
                                    blank
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        )
    }
}

export default NavBar;