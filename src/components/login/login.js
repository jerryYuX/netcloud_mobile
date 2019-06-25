import React, { Component } from "react";
class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "jack",
            password: "123456",
            redirectToReferrer: false   // 是否重定向到之前的页面
        };

    }
    render() {
        return(
            <div>login</div>
        )
    }


}
export default Login;
