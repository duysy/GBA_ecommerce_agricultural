import React, { Component } from "react";
import JoditEditor from "jodit-react";
import "./styles.css";
import { getAddressUint256, getInforAccount, random } from "../../contract/getData"
import { DBUser_update } from "../../contract/rawData"
import { HomeTabbar } from "../molecules";
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameUser: "",
            addressUser: "",
            phoneNumber: "",
            hashIpfsDetail: "",
            content: ""
        }
        this.submit = this.submit.bind(this);
        this.onFileUpload = this.onFileUpload.bind(this);
    }
    async componentDidMount() {
        getInforAccount(await getAddressUint256()).then(async (info) => {
            fetch('https://gateway.pinata.cloud/ipfs/' + info.hashIpfsDetail)
                .then(response => response.text())
                .then((data)=>{
                    // console.log(data);
                    localStorage.setItem('JoditEditor',data);
                    this.setState({
                        content:data
                    })
                });
            this.setState({
                nameUser: info.nameUser,
                addressUser: info.addressUser,
                phoneNumber: info.phoneNumber,
                hashIpfsDetail: info.hashIpfsDetail,
                content: localStorage.getItem('JoditEditor')
            });
        })
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
    submit() {
        this.onFileUpload(new File([new Blob([localStorage.getItem('JoditEditor')])], "abc.html")).then(async (IpfsHash) => {
            DBUser_update(
                this.state.nameUser,
                this.state.addressUser,
                this.state.phoneNumber,
                IpfsHash.IpfsHash);
        });
    }
    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };
    render() {
        return (
            <div className="EditSellerInfo">
                <HomeTabbar />
                <div className="EditSellerInfonMain">
                    <h2>Chỉnh sửa thông tin tài khoản</h2>
                    <nav>Họ Và Tên</nav>
                    <input type="text" value={this.state.nameUser} onChange={event => this.setState({
                        nameUser: event.target.value
                    })} placeholder="Nguyen Van A/vana123" />
                    <nav>Địa chỉ</nav>
                    <input type="text" value={this.state.addressUser} onChange={event => this.setState({
                        addressUser: event.target.value
                    })} placeholder="Da Nang" />
                    <nav>Số điện thoại</nav>
                    <input type="text" value={this.state.phoneNumber} onChange={event => this.setState({
                        phoneNumber: event.target.value
                    })} placeholder="034545xxxxxx" />
                    <nav>Khác</nav>
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
                    <button onClick={this.submit}>Sửa</button>
                </div>
                <div className="Margin"></div>
            </div>
        )
    }
}