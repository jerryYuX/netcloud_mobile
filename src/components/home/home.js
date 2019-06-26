import React, { Component } from "react";
import 'antd-mobile/dist/antd-mobile.css';
import './home.css'
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import { Flex, WhiteSpace ,Button} from 'antd-mobile';
import { Tabs, Badge } from 'antd-mobile';
import user from "../user/user"
import Login from "../login/login";
import PropTypes from 'prop-types';
import Header from '../header/header'
import Hot_song from '../hotSong/hot_song'
import Aplayer from '../player/Aplayer'
import SearchContainer from '../../containers/SearchContainer'
const tabs = [
    { title: <Badge text={'3'}>推荐音乐</Badge>,key:1 },
    { title: <Badge text={'今日(20)'}>热歌榜</Badge>,key:2 },
    { title: <Badge dot>搜索</Badge>,key:3 },
];

const style = { backgroundColor: '#fff'}

class Home extends Component{
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }
    renderContent = tab =>{
        if(tab.key == 1){
            return (<div style={style}>zujian1</div>)
        }
        if(tab.key == 2){
            return (<div style={style}><Hot_song/></div>)
        }
        if(tab.key == 3){
            return (<SearchContainer></SearchContainer>)
        }
    };



    constructor(props) {
        super(props);
        this.state = {
            audio:{}
        };

    }
    render() {
        const { match, location } = this.props;


        return(
            <div className="main-container">
                <Flex>
                    <Flex.Item className={'header'}>
                        <Header>

                        </Header>



                    </Flex.Item>

                </Flex>

                <Flex className={'toobars'}>
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
                <Aplayer audio={this.state.audio}/>



            </div>

        )
    }



}
export default Home;
