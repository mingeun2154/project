import { Typography } from "@material-ui/core";
import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <Typography 
                    component="h1" 
                    variant="h2" 
                    align="center"
                    style={{ marginTop: "1%" }}
                    >
                        πΎπππΏ π½π€ππ§π π
                    </Typography>
            </div>
        );
    }
}

export default Header;