import React, { Component } from 'react';

class search extends Component {
    render() {
        return (
            <div className="col-12">   
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control"  placeholder="Nhập vào từ khóa"/>
                        <div className="btn btn-info">Tìm</div>
                    </div>
                </div>
                <hr/>
            </div>     
        );
    }
}

export default search;