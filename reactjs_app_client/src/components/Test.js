import React, { Component } from "react"
import { TestAtom } from "./atoms";
import { TestMolecules } from "./molecules";
import {TestPages } from "./pages";

export default class extends Component {
    render() {
        return (
            <div>
                <TestPages />
            </div>
        );
    }
}