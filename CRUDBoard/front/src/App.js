import React from "react";
import {
    Grid,
    Container,
    Card,
    List,
} from "@material-ui/core";

import PostThumbnail from "./components/PostThumbnail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [ 
                { id: "0", title: "title1", author: "author1", date: "2022.8.29" },
                { id: "1", title: "title2", author: "author2", date: "2022.8.30" },
            ],
        }

    }

    render() {

        let thumbnailItems = this.state.items.length>0 && (
            <Card variant="outlined">
                <List>
                    {this.state.items.map((item, idx) => (
                        <PostThumbnail item={item}
                            key={item.id}
                        />
                    ))}
                </List>
            </Card>
        )

        return (
            <Container component="main" maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid component="header" item xs={12}>
                        <Header />
                    </Grid>
                    <Grid component="aside" item xs={3}>
                        <SideBar />
                    </Grid>
                    <Grid component="article" item xs={9} style={{height: "100%"}}>
                        {thumbnailItems}
                    </Grid>

                </Grid>
            </Container>
        )
    }
}

export default App;