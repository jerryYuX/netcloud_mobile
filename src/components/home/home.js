import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import user from "../user/user"
import Login from "../login/login";
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "jack",
            password: "123456",
            redirectToReferrer: false   // 是否重定向到之前的页面
        };

    }
    render() {
        const { match, location } = this.props;
        console.log(match.url)
        return(
            <div>
                home

                <Route
                    path={match.url}
                    render={props => <div>test1</div>}
                    exact

                    />

                <Route
                    path={`${match.url}/user`}


                    render={props => <div>test</div>}
                     />

            </div>

        )
    }


}
export default Home;
