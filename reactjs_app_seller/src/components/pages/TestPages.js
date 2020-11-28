import React, { Component } from "react";
import { getIdNodeto5 } from "../../contract/getData"
import {  } from "../../contract/rawData"

export default class extends Component {
    async componentDidMount() {
        console.log(await getIdNodeto5(0));
    }
    render() {
        return (
            <div>
                THis is test page
            </div>
        )
    }
}