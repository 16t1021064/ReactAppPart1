import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if(this.props.per ===1){
            return "Admin";
        }else if(this.props.per === 2){
            return "Moderator";
        }else{  return "Normal User"  }
    }
    render() {
        return (
            <tr>
                <td >{this.props.stt+1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                <div className="btn btn-warning sua">
                    <i className="fa fa-edit    "> Sửa </i>
                </div>
                <div className="btn btn-danger xoa">
                    <i className="fa fa-edit    "> Xóa </i>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;