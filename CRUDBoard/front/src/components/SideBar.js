import React from "react";
import { 
    List, 
    ListSubheader,
    ListItemIcon,
    ListItemText,
    ListItem,
    Card,
    Divider,
} from "@material-ui/core";
import { 
    Create,
    Feedback,
    LockOpen,
} from "@material-ui/icons";

class SideBar extends React.Component {
    render() {
        return (
            <Card variant="outlined">
                <List 
                    component="nav"
                    subheader={
                        <ListSubheader component="div" id="sidebar subheader">
                            사용자 메뉴
                        </ListSubheader>
                    }
                >
                    <Divider />
                    <ListItem component="a" href="/login">
                        <ListItemIcon><LockOpen /></ListItemIcon>
                        <ListItemText primary="로그아웃" />
                    </ListItem>
                    <ListItem component="a" href="/myPosts">
                        <ListItemIcon><Feedback /></ListItemIcon>
                        <ListItemText primary="내가 쓴 글" />
                    </ListItem>
                    <ListItem component="a" href="/newPost">
                        <ListItemIcon><Create /></ListItemIcon>
                        <ListItemText primary="글 쓰기" />
                    </ListItem>
                </List>
            </Card>
        )
    }
}

export default SideBar;