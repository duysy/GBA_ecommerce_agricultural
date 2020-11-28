import React, { Component } from "react";
import JoditEditor from "jodit-react";
import "./styles.css";
import { getInforProduct } from "../../contract/getData"
import { DBProduct_insert } from "../../contract/rawData"
import { Editter, HomeTabbar } from "../molecules";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            price: null,
            unit: null,
            category: null,
            datePost: null,
            discount: null,
            soldAtLocation: null,
            hashIpfsDetail: null,
            hashIpfsImage: null,
            selectedFile: null
        }
        localStorage.removeItem("JoditEditor");
        this.submit = this.submit.bind(this);
        this.onFileUpload = this.onFileUpload.bind(this);

    }
    async componentDidMount() {
        if (this.props.match.params.idProduct != "Add") {
            let data = await getInforProduct(this.props.match.params.idProduct);
            this.setState({
                title: data.title,
                price: data.price,
                unit: data.unit,
                category: data.category,
                datePost: data.datePost,
                discount: data.discount,
                soldAtLocation: data.soldAtLocation,
                hashIpfsDetail: data.hashIpfsDetail,
                hashIpfsImage: data.hashIpfsImage,
                selectedFile: null
            })
        }
    }
    async onFileUpload(fileUpload) {
        let formData = new FormData()
        formData.append('file', fileUpload);
        const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'pinata_api_key': '95c7f80a1e9da9ee66e7',
                'pinata_secret_api_key': 'f635c18a8c85351a0068b30ea1fd65c10f4881fc24307a54a66d00c602664efd'
            },
            body: formData // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects

    };
    async submit() {
        this.onFileUpload(new File([new Blob([localStorage.getItem('JoditEditor')])], "abc.html")).then((ipfsJoditEditor) => {
            this.onFileUpload(this.state.selectedFile).then((IpfsHashImage) => {
                console.log(ipfsJoditEditor);
                console.log(IpfsHashImage);
                DBProduct_insert(
                    this.state.title,
                    this.state.price,
                    this.state.unit,
                    this.state.category,
                    this.state.discount,
                    this.state.soldAtLocation,
                    ipfsJoditEditor.IpfsHash,
                    IpfsHashImage.IpfsHash
                );
            })
        });

    }
    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };
    render() {
        return (
            <div className="AddProduct">
                <HomeTabbar />
                <div className="AddProductMain">
                    <h2>Thêm sản phẩm</h2>
                    <nav>Tên sản phẩm</nav>
                    <input type="text" value={this.state.title} onChange={event => this.setState({
                        title: event.target.value
                    })} placeholder="Tiêu Quảng Trị" />
                    <nav>Giá</nav>
                    <input type="text" value={this.state.price} onChange={event => this.setState({
                        price: event.target.value
                    })} placeholder="75.000" />
                    <nav>Đơn vị</nav>
                    <input type="text" value={this.state.unit} onChange={event => this.setState({
                        unit: event.target.value
                    })} placeholder="Kg/Lượng/Cái/Bịch/Hũ" />
                    <nav>Danh mục</nav>
                    <input type="text" value={this.state.category} onChange={event => this.setState({
                        category: event.target.value
                    })} placeholder="Hồ tiêu" />
                    <nav>Vị trí</nav>
                    <input type="text" value={this.state.soldAtLocation} onChange={event => this.setState({
                        soldAtLocation: event.target.value
                    })} placeholder="Đà Nẵng" />
                    <input type="file" onChange={this.onFileChange} />
                    <nav>Chi tiết</nav>
                    <JoditEditor
                        ref={React.createRef()}
                        value={localStorage.getItem("JoditEditor")}
                        config={{ readonly: false }}
                        tabIndex={1}
                        onChange={(newContent) => {
                            // console.log(newContent);
                            localStorage.setItem('JoditEditor', newContent);
                        }}
                    />
                    <button onClick={this.submit}>Thêm</button>
                    <div className="Margin"></div>
                </div>
            </div>
        )
    }
}