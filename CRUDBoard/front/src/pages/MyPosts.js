import React from "react";
import { 
    List,
    Container,
    Grid,
    Card,
} from "@material-ui/core";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Post from "../components/Post";

class MyPosts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [{id: "0", title: "title1", author: "author1", date: "2022.8.28", body: "body1"},
                    {id: "1", title: "title1", author: "author1", date: "2022.8.28", body: "body1"}
            ],
        }
    }

    render() {

        const postItems = this.state.items.length>0 && (
            <Card variant="outlined">
                <List>
                    {this.state.items.map((item, idx) => (
                        <Post
                            item={item}    
                            key={item.id}
                        />))
                    }
                </List>  
            </Card>
        )

        return (
            <Container component="main" maxWidth="md">
                <Grid container spacing={4}>
                    <Grid component="header" item xs={12}>
                        <Header />
                    </Grid>
                    <Grid component="nav" item xs={12}>
                        <NavBar />
                    </Grid>
                    <Grid component="article" item xs={12}>
                        {postItems}
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default MyPosts;