import { 
    Grid,
    Paper, 
    Typography
} from "@material-ui/core";
import React from "react";

class PostThumbnail extends React.Component {
    constructor(props){
        super(props);
        this.state = { item: props.item };
    }

    render() {
        return (
            <div className="PostThumbnail">
                <Paper style={{ margin: 16 ,padding:16 }}>
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
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default PostThumbnail;