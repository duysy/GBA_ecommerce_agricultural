import React, { Component } from "react";
import "./styles.css"
import CategoriesContent from "./CategoriesContent"

const dataTabView = [
    {
        title: "Description",
        icon: "fa fa-user",
        content: <CategoriesContent/>
    },
    {
        title: "Description",
        icon: "fa fa-user",
        content: <CategoriesContent>Pahe2</CategoriesContent>
    },
    {
        title: "Description",
        icon: "fa fa-user",
        content: <CategoriesContent>Pahe3</CategoriesContent>
    },
    {
        title: "Description",
        icon: "fa fa-user",
        content: <CategoriesContent>Pahe4</CategoriesContent>
    }
]
export default class extends Component {
    constructor() {
        super();
        this.state = {
            tabActive: 0
        }
    }
    render() {
        return (
            <div className="CategoriesTab">
                <div className="CategoriesNav">
                    <ul>
                        {
                            dataTabView.map((item, index) => {
                                return <li key={index}>
                                    <input type="button" className={String(index === this.state.tabActive ? "CategoriesNav-active" : "")} value={item.title} onClick={() => {
                                    this.setState({
                                        tabActive: index
                                    })
                                }} /></li>
                            })
                        }
                    </ul>
                </div>
                <div className="CategoriesContentWrap">
                    {
                        dataTabView.map((item, index) => {
                            return <div key={index} defaultChecked className={"CategorieContent" + String(index === this.state.tabActive ? " Categorie-active" : "")}>
                                {item.content}
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}