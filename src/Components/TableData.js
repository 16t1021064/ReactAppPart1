import React, { Component } from 'react';
import TableDataRow from './TableDataRow';
class TableData extends Component {
  deleteButtonClick = (idUser) => {
    this.props.deleteUser(idUser);
  }
  mappingDataUser = () => this.props.dataUserProps.map((value, key) =>
  (<TableDataRow editFuncClick={() => this.props.editFunc(value)}
    deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)}
    userName={value.name}
    key={key}
    stt={key}
    tel={value.tel}
    per={value.Permission}
    id={value.id}
    changeEditUserStatus={() => this.props.changeEditUserStatus()} />
  ));
  render() {
    return (
      <div className="col">
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
            {this.mappingDataUser()}
          </tbody>
        </table>
      </div>

    );
  }
}

export default TableData;