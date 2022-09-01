import React from "react";
import {
    Grid,
    Container,
    Box,
    TextField,
    Typography,
    Card,
} from "@material-ui/core";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

class NewPost extends React.Component {
    render() {
        return (
            <Container component="main" maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item component="header" xs={12}>
                        <Header />
                    </Grid>
                    <Grid item component="nav" xs={12}>
                        <NavBar />
                    </Grid>
                    <Grid item xs={12}>
                        <Card variant="outlined" style={{padding: "2%"}}>
                            <Container>
                                <form noValidate >
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField 
                                                name="title"
                                                id="title"
                                                required
                                                fullWidth
                                                size="small"
                                                autoFocus
                                                variant="outlined"
                                                label="제목"
                                            />
                                        </Grid>
                                        <Grid item xs={12} style={{height: "40vh"}}>
                                            <TextField
                                                multiline
                                                fullWidth
                                                size="small"
                                                rows={15}
                                                variant="outlined"
                                                label="내용"
                                            />
                                        </Grid>
                                    </Grid>
                                </form>
                            </Container>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default NewPost;