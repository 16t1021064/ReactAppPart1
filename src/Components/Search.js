import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: ' ',
            userObj: {}
        };
    }
    getUserInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserInfoForApp(info);
    }
    showEditForm = () => {
        if (this.props.editUserStatus === true) {
            return <EditUser getUserInfo={(info) => this.getUserInfo(info)}
                userEditObject={this.props.userEditObject}
                changeEditUserStatus={() => this.props.changeEditUserStatus()} />;
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        })
        this.props.checkConnectProps(this.state.tempValue);
    }

    hienThiNut = () => {
        if (this.props.hienThiForm === true) {
            return <div className="btn btn-block btn-secondary" onClick={() => this.props.ketNoi()} > Đóng lại </div>;
        } else {
            return <div className="btn btn-block btn-info" onClick={() => this.props.ketNoi()} > Thêm mới </div>;
        }
    }
    render() {
        return (
            <div className="col-12">
                {this.showEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event) => this.isChange(event)} placeholder="Nhập tên cần tìm" />
                        <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
                    </div>
                    <div className="btn-group1">
                        {this.hienThiNut()}
                    </div>

                </div>
                <hr />
            </div>
        );
    }
}

export default Search;