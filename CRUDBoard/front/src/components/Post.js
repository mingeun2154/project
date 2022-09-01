import React from "react";
import { 
    Divider, 
    Typography,
    Paper,
    Grid,
} from "@material-ui/core";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state={item: props.item, };
    }

    render() {
        return (
            <Paper style={{ margin: 16, padding: 16}}>
                <Grid container spacing={2} alignItems="baseline">
                    <Grid item md={4} xs={4}>
                        <Typography variant="h5">{this.state.item.title}</Typography>
                    </Grid>
                    <Grid item md={8} xs={8}>
                        <Typography variant="body1">{this.state.item.author}</Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant="caption">{this.state.item.date}</Typography>
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                        <Typography variant="body1">{this.state.item.body}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default Post;