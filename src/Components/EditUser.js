import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <form>
                        <div className="card text-white bg-warning mb-3 mt-2">
                            <div className="card-header text-center">Sửa</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" placeholder="Tên user" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="tel" className="form-control" placeholder="Số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" name="Permission" required>
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>Administrator</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-danger" value="Thay đổi" onClick={() => this.props.changeEditUserStatus()} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser;