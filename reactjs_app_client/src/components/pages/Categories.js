import React, { Component } from "react"
import "./styles.css";
import { HeaderHome, HomeTabbar ,Categories} from "../molecules";

export default class extends Component {
    render() {
        return (
            <div className="Categories">
                <HeaderHome />
                <Categories/>
                <HomeTabbar />
            </div>
        );
    }
}