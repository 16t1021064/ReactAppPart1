import React, { Component } from 'react';

class TableData extends Component {
    render() {
        return (
            <div className="col-9">
  <table className="table table-striped table-inverse table-hover">
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>SĐT</th>
        <th>Quyền</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td >1</td>
        <td>Võ Văn Huy</td>
        <td>123456789</td>
        <td>Administrator</td>
        <td>
          <div className="btn btn-warning sua">
            <i className="fa fa-edit    "> Sửa </i>
          </div>
          <div className="btn btn-danger xoa">
            <i className="fa fa-edit    "> Xóa </i>
          </div>
        </td>
      </tr>
      <tr>
        <td >2</td>
        <td>Võ Văn Huy</td>
        <td>123456789</td>
        <td>Administrator</td>
        <td>
          <div className="btn btn-warning sua">
            <i className="fa fa-edit    "> Sửa </i>
          </div>
          <div className="btn btn-danger xoa">
            <i className="fa fa-edit    "> Xóa </i>
          </div>
        </td>
      </tr>
      <tr>
        <td >3</td>
        <td>Võ Văn Huy</td>
        <td>123456789</td>
        <td>Administrator</td>
        <td>
          <div className="btn btn-warning sua">
            <i className="fa fa-edit    "> Sửa </i>
          </div>
          <div className="btn btn-danger xoa">
            <i className="fa fa-edit    "> Xóa </i>
          </div>
        </td>
      </tr>
      <tr>
        <td >4</td>
        <td>Võ Văn Huy</td>
        <td>123456789</td>
        <td>Administrator</td>
        <td>
          <div className="btn btn-warning sua">
            <i className="fa fa-edit    "> Sửa </i>
          </div>
          <div className="btn btn-danger xoa">
            <i className="fa fa-edit    "> Xóa </i>
          </div>
        </td>
      </tr>
      <tr>
        <td >5</td>
        <td>Võ Văn Huy</td>
        <td>123456789</td>
        <td>Administrator</td>
        <td>
          <div className="btn btn-warning sua">
            <i className="fa fa-edit    "> Sửa </i>
          </div>
          <div className="btn btn-danger xoa">
            <i className="fa fa-edit    "> Xóa </i>
          </div>
        </td>
      </tr>
      <tr>
        <td >6</td>
        <td>Võ Văn Huy</td>
        <td>123456789</td>
        <td>Administrator</td>
        <td>
          <div className="btn btn-warning sua">
            <i className="fa fa-edit    "> Sửa </i>
          </div>
          <div className="btn btn-danger xoa">
            <i className="fa fa-edit    "> Xóa </i>
          </div>
        </td>
      </tr>
      <tr>
        <td >7</td>
        <td>Võ Văn Huy</td>
        <td>123456789</td>
        <td>Administrator</td>
        <td>
          <div className="btn btn-warning sua">
            <i className="fa fa-edit    "> Sửa </i>
          </div>
          <div className="btn btn-danger xoa">
            <i className="fa fa-edit    "> Xóa </i>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

        );
    }
}

export default TableData;