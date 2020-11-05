import React, { Component } from "react";
import JoditEditor from "jodit-react";
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
        this.config = {
            readonly: false
        }

    }
    render() {
        return (
            <JoditEditor
                ref={React.createRef()}
                value={this.state.content}
                config={this.config}
                tabIndex={1}
                onChange={(newContent) => {
                    console.log(newContent);
                }}
            />
        )
    }
}
