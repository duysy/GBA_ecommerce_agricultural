import React,{Component} from "react";
import { getProduct } from '../../contract/getData';
import { setProduct } from '../../contract/rawData';
import "./test.css";
export default class extends Component{
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            inputValue: '',
            status: '',
            id: '',
            title: "",
            price: "",
            unit: "",
            caterory: "",
            datePost: "",
            hashIpfsDetail: ""
        }
    }
    async componentDidMount() {
        await this.getProduct();
    }
    getProduct = async () => {
        this.setState({ message: JSON.stringify(await getProduct()) })
    }
    onClick = async (event) => {
        var data = await setProduct(this.state.id, this.state.title, this.state.price, this.state.unit, this.state.caterory, this.state.datePost, this.state.hashIpfsDetail);
        this.setState({ status: 'Waiting for set message: ' + JSON.stringify(data) });
        this.setState({ status: 'Done' });
        await this.getProduct();
    }
    render() {
        return (
            <div className="App">
                <h2>contract Contract</h2>
                <p>The message is: {this.state.message}</p>
                <input onChange={event => this.setState({
                    id: event.target.value
                })} />
                <input onChange={event => this.setState({
                    title: event.target.value
                })} />
                <input onChange={event => this.setState({
                    price: event.target.value
                })} />
                <input onChange={event => this.setState({
                    unit: event.target.value
                })} />
                <input onChange={event => this.setState({
                    datePost: event.target.value
                })} />
                <input onChange={event => this.setState({
                    hashIpfsDetail: event.target.value
                })} />
                <button onClick={this.onClick}>Set</button>
                <p>{this.state.status}</p>

            </div>
        )
    }
}