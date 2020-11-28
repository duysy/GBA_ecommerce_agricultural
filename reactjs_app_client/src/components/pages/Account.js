import React,{Component} from "react"
import { HeaderHome, BannerSliderWrap, HomeTabbar, CardHeader, CardProductItem, Cart, Account, LoginForm, RegisterForm } from "../molecules";
import "./styles.css"

export default class extends Component {
    render() {
        return (
            <div className="Account">
                <HeaderHome />
                <Account />
                <div className="AccountBody">
                    <LoginForm />
                    <RegisterForm />
                </div>
                <HomeTabbar />
            </div>
        )
    }
}