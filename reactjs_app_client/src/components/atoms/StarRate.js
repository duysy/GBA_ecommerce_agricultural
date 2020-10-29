import React, { Component } from "react";
import "./styles.css"
export default class extends Component {
    constructor(props) {
        super(props);
        let arrayStar = [];
        let arrayOStar = []
        let numStar = this.props.numberStar > 5 ? 5 : this.props.numberStar
        for (let i = 0; i < numStar; i++) {
            arrayStar.push(i);
        }
        for (let i = numStar; i < 5; i++) {
            arrayOStar.push(i);
        }
        this.state = {
            arrayStar: arrayStar,
            arrayOStar: arrayOStar
        }
    }
    render() {
        return (
            <div className="start-rate">
                {
                    this.state.arrayStar.map((item, index) => {
                        return <i className="fa fa-star" aria-hidden="true" key={item}></i>;
                    })
                }
                {
                    this.state.arrayOStar.map((item, index) => {
                        return <i className="fa fa-star-o" aria-hidden="true" key={item}></i>;
                    })
                }
            </div>
        );
    }
}