import React,{Component} from "react"
import "./styles.css";

export default class extends Component {
    render() {
        return (
                <div className="AccountHeading">
                    <div className="AccountHeadingTitle active">
                        ĐĂNG NHẬP
                    </div>
                    <div className="AccountHeadingTitle">
                        ĐĂNG KÝ
                    </div>
                </div>
        );
    }
}