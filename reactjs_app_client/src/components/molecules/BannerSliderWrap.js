import React, { Component } from "react";
import "./styles.css"
const linkImage = [
    { url: "https://loremflickr.com/300/100" },
    { url: "https://loremflickr.com/301/101" },
    { url: "https://loremflickr.com/302/102" },
]
export default class extends Component {
    constructor(props) {
        super(props);
        this.slideNavLeft = this.slideNavLeft.bind(this);
        this.slideNavRight = this.slideNavRight.bind(this);
        this.state = {
            localtion: 0
        }
    }
    componentDidMount() {
        this.widthClideCard = document.getElementsByClassName("BannerSliderCard")[0].clientWidth;
        setInterval(() => {
            this.setState({
                localtion: parseInt(this.state.localtion) - this.widthClideCard
            });
        }, 3000);
    }
    async componentWillUnmount() {
        await clearInterval();
    }
    componentDidUpdate() {
        if (this.state.localtion <= linkImage.length * -this.widthClideCard || this.state.localtion > 0) {
            this.setState({
                localtion: 0
            });
        }
    }
    slideNavLeft() {
        if (this.state.localtion > linkImage.length * -this.widthClideCard) {
            console.log(this.state.localtion);
            this.setState({
                localtion: parseInt(this.state.localtion) - this.widthClideCard
            });
        }
        else {
            this.setState({
                localtion: 0
            });
        }
    }

    slideNavRight() {
        console.log(this.state.localtion);
        if (this.state.localtion <= 0) {
            console.log(this.state.localtion);
            this.setState({
                localtion: parseInt(this.state.localtion) - this.widthClideCard
            });
        }
        else {
            this.setState({
                localtion: 0
            });
        }

    }
    render() {
        return (
            <div className="BannerSliderWrap">
                <div className="slideNav">
                    <div className="slideNavLeft" onClick={(e) => this.slideNavLeft()}>
                        <i className="fa fa-chevron-left"></i>
                    </div>
                    <div className="slideNavRight" onClick={(e) => this.slideNavRight()}>
                        <i className="fa fa-chevron-right"></i>
                    </div>
                </div>
                <div className="BannerSlider" style={{ marginLeft: this.state.localtion + "px" }}>
                    {linkImage.map((value, index) => {
                        return (
                            <div className="BannerSliderCard" key={index}>
                                <img src={value.url} alt="" />
                            </div>
                        );
                    })}

                </div>
            </div>
        );
    }
}