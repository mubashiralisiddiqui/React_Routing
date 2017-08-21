import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const user = {
    name: "a@a.com",
    password: 123
}
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }
    componentWillMount() {
        const auth = JSON.parse(localStorage.getItem('auth'))
        console.log("componentWillmount", auth)
        if (auth.auth=== true) {
            this.props.history.push('/books')
        }
        else{
          this.props.history.push('/')
        }
    }
    Login(e) {
        e.preventDefault()
        let salesmanname = this.refs.name.getValue();
        let salesmanPassword = this.refs.Password.getValue();
        if (user.name == salesmanname && user.password == salesmanPassword) {
            localStorage.setItem("auth", JSON.stringify({ auth: true }))
            this.props.history.push('/books')
        }
        else {
            alert("wrong password")
        }
    }
    render() {
        const style = {
            parentDiv: {
                width: "50vh",
                height: '70vh',
                margin: "5vh auto",
                textAlign: "center",
                marginTop:"100px"
            },
            Paper: {
                margin: "0px auto",
                paddingLeft: "2vh "
            }
        };
        return (

            <div style={style.parentDiv}>
                <div>

                    < h1 className="text-center">Login</h1>
                    <Paper style={style.Paper} zDepth={1} >
                        <div className="form">
                            <form onSubmit={(e) => this.Login(e)}>
                                <TextField hintText="Name" ref="name" /> <br />
                                <br />
                                <TextField type="password" hintText="Password" ref="Password" /> <br />
                                <br />
                                <RaisedButton type="submit" label="Login" primary={true} className="btncolor" />
                                <Link to="/"><p>Dont have an account?</p></Link>
                            </form>
                        </div>
                    </Paper>
                </div>
                {this.props.children}
            </div >
        )
    }
}
export default withRouter(Login);

