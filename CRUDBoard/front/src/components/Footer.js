import { Typography } from "@material-ui/core";
import React from "react";

class Footer extends React.Component {
    render() {
        const style = {
            backgroundColor: "#F8F8F8",
            borderTop: "1px solid #E7E7E7",
            textAlign: "center",
            padding: "20px",
            position: "fixed",
            left: "0",
            bottom: "0",
            height: "60px",
            width: "100%"
          };

        return (
            <div className="Footer" style={style}>
                <Typography variant="h5" align="center">Footer</Typography>
            </div>
        )
    }
}

export default Footer;