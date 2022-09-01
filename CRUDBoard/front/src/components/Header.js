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
                        𝘾𝙍𝙐𝘿 𝘽𝙤𝙖𝙧𝙙 📌
                    </Typography>
            </div>
        );
    }
}

export default Header;