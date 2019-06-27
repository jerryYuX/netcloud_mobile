import React, { Component } from "react";
import { Button,List, InputItem, WhiteSpace,Modal } from 'antd-mobile';
import {phone_login,login} from '../../api/login'
import { Link } from 'react-router-dom'
class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modal1:false
        };

    }
    login(){
        let username = document.querySelector('#username').value;
        let pwd = document.querySelector('#password').value;
        let that = this;
        login(username,pwd).then((res)=>{


        },(res)=>{
            // console.log(1);
            that.showModal('modal1');
        })

    }
    showModal(key){
        console.log(1)
        // e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose(key){
        console.log(2)
        this.setState({
            [key]: false,
        });
    }
    test(){
        alert('test');
    }
    render() {
        return(
            <div>
                <List renderHeader={() => '登录'}>
                    <InputItem
                        placeholder="click label to focus input"
                        ref={el => this.labelFocusInst = el}
                        id={'username'}
                    ><div onClick={() => this.labelFocusInst.focus()}>用户名</div></InputItem>
                    <InputItem
                        placeholder="click label to focus input"
                        ref={el => this.labelFocusInst = el}
                        type={'password'}
                        id={'password'}
                    ><div onClick={() => this.labelFocusInst.focus()}>密码</div></InputItem>
                </List>
                <Button type="warning" onClick={()=>this.login()}>登录</Button>
                <Link to={'/home'} className={'am-button am-button-default'}>返回</Link>
                <Modal
                    visible={this.state.modal1}
                    transparent
                    maskClosable={false}

                    title="提示"
                    footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1'); } }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                    // afterClose={() => { alert('afterClose'); }}
                >
                    <h3>登录接口被和谐</h3>
                </Modal>

            </div>
        )
    }


}
export default Login;
