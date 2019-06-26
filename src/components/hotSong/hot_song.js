import React, { Component } from "react";
import './hot_song.css'
class Hot_song extends Component{
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
            <div>
                <div className="hotop">
                    <div className="hotopct">
                        <div className="u-hmsprt hoticon"></div>
                        <div className="hottime">更新日期：06月20日</div>
                    </div>
                </div>


            </div>
        )
    }


}
export default Hot_song;
