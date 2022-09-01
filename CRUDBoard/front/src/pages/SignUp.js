import { 
    TextField, 
    Typography,
    Grid,
    Container,
    Link,
    Button,
 } from "@material-ui/core";
import React from "react";

const PASSWORD_UNMATCH = "❗️ 비밀번호 불일치"
const PASSWORD_MATCH = "✅ 비밀번호 일치"

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            helperText: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.updatePassword = this.updatePassword.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password");
        /*
        SignUp({ email: email, username: username, password: password }).then(
            (response) => {
                window.location.href="/login";
            }
        )
        */
    }

    validatePassword(event) {
        if(this.state.password === event.target.value)
            this.setState({ helperText: PASSWORD_MATCH});
        else
            this.setState({ helperText: PASSWORD_UNMATCH})
    }

    updatePassword(event) {
        this.setState({ password: event.target.value })
        console.log(event.target.value);
    }

    render() {
        return (
            <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
                <form noValidate onSubmit={this.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography component="h1" variant="h5">계정 생성</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                name="username"
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="사용자 이름"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="email"
                                id="email"
                                variant="outlined"
                                required
                                fullWidth
                                label="이메일 주소"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={this.updatePassword}
                                name="password"
                                id="password"
                                type={"password"}
                                variant="outlined"
                                required
                                fullWidth
                                label="비밀번호"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={this.validatePassword}
                                name="confirmPassword"
                                id="confirmPassword"
                                type={"password"}
                                variant="outlined"
                                required
                                fullWidth
                                helperText={this.state.helperText}
                                label="비밀번호 확인"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Button 
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >계정 생성</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button 
                                component="a"
                                href="/"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >취소</Button>
                        </Grid>
                        <Grid container spacing={2} justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">이미 계정이 있습니까? 로그인 하세요.</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        )
    }
}

export default SignUp;