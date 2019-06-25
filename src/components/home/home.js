import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";

import user from "../user/user"
import Login from "../login/login";
import { Flex, WhiteSpace } from 'antd-mobile';
import { Tabs, Badge } from 'antd-mobile';
import PropTypes from 'prop-types';
const tabs = [
    { title: <Badge text={'3'}>推荐音乐</Badge>,key:1 },
    { title: <Badge text={'今日(20)'}>热歌榜</Badge>,key:2 },
    { title: <Badge dot>搜索</Badge>,key:3 },
];
const style = {display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff'}

class Home extends Component{
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }
    renderContent = tab =>{
        if(tab.key == 1){
            return (<div style={style}>zujian1</div>)
        }
        if(tab.key == 2){
            return (<div style={style}>zujian2</div>)
        }
        if(tab.key == 3){
            return (<div style={style}>zujian3</div>)
        }
    };

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

        return(
            <div className="main-container">

                <Flex>
                    <Flex.Item>
                        <Tabs tabs={tabs}
                              initialPage={1}
                              onChange={(tab, index) => { console.log('onChange', index, tab); }}
                              onTabClick={(tab, index) => {  }}
                        >
                            {this.renderContent}
                        </Tabs>


                        <Route
                            path={match.url}
                            render={props => <div>test1</div>}
                            exact
                        />
                        <Route
                            path={`${match.url}/user`}
                            component={user}
                        />

                    </Flex.Item>

                </Flex>

            </div>

        )
    }


}
export default Home;
