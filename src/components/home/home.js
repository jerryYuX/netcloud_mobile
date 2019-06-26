import React, { Component } from "react";
import 'antd-mobile/dist/antd-mobile.css';
import './home.css'
import Recommend from '../recommend/index';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import { Flex, WhiteSpace ,Button} from 'antd-mobile';
import { Tabs, Badge } from 'antd-mobile';
import user from "../user/user"
import Login from "../login/login";
import PropTypes from 'prop-types';
import Header from '../header/header'
import Hot_song from '../hotSong/hot_song'
import Aplayer from '../player/Aplayer'
const tabs = [
    { title: <Badge text={'3'}>推荐音乐</Badge>,key:1 },
    { title: <Badge text={'今日(20)'}>热歌榜</Badge>,key:2 },
    { title: <Badge dot>搜索</Badge>,key:3 },
];

const style = { height: document.documentElement.clientHeight - 249, backgroundColor: '#fff' ,marginBottom:'68px'}

class Home extends Component{
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }
    renderContent = tab =>{
        if(tab.key == 1){
            return (<div style={{height: document.documentElement.clientHeight - 251, backgroundColor: '#fff' ,marginBottom:'68px'}}>
                    <Recommend  ></Recommend>
                </div>

            )
        }
        if(tab.key == 2){
            return (<div style={style}><Hot_song/></div>)
        }
        if(tab.key == 3){
            return (<div style={style}>zujian3</div>)
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
            <div className="main-container" style={{height: 'cale( 100% - 64px )'}}>
                <Flex>
                    <Flex.Item className={'header'}>
                        <Header>

                        </Header>



                    </Flex.Item>

                </Flex>

                <Flex className={'toobars'} >
                    <Flex.Item>
                        <Tabs tabs={tabs}
                              initialPage={1}
                              onChange={(tab, index) => { console.log('onChange', index, tab); }}
                              onTabClick={(tab, index) => {  }  }

                              className='tab'
                        >
                            {this.renderContent}
                        </Tabs>



                        {/*<Route*/}
                        {/*    path={match.url}*/}
                        {/*    render={props => <div>test1</div>}*/}
                        {/*    exact*/}
                        {/*/>*/}
                        {/*<Route*/}
                        {/*    path={`${match.url}/user`}*/}
                        {/*    component={user}*/}
                        {/*/>*/}

                    </Flex.Item>

                </Flex>
                <Aplayer audio={this.state.audio}/>



            </div>

        )
    }



}
export default Home;
