import React from 'react';
import './HotSearch.css'
import {  Button, WhiteSpace, WingBlank } from 'antd-mobile';

let arr=[
    {
        name:'hyq'
    },
    {
        name:'你好，旧时光'
    },
    {
        name:'be'
    },
    {
        name:'beautiful'
    },
    {
        name:'take me hand'
    },
    {
        name:'nihao'
    },
]
const HotSearch=({list,handleClick})=>{
    return (
        <div>
            <WingBlank><div className="sub-title">热门搜索</div></WingBlank>
        <div className="tag-container">
            {
                list.map(item=>{
                    return (
                        <WingBlank key={item.first}><Button onClick={handleClick} key={item.first} size="small" inline>{item.first}</Button></WingBlank>
                    )
                })
            }
        </div>
        </div>
    )
}
export default HotSearch