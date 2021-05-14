import '.././App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import React, { Component } from 'react';
import DataUser from './Data.json';

const { v4: uuidv4 } = require('uuid');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hienThiForm: false,
      data: DataUser,
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }
  getUserInfoForApp = (info) => {
    this.state.data.forEach((value) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    })
  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  getNewUserData = (name, tel, Permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;

    item.Permission = Permission;
    console.log(item);
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
  }
  editUser = (user) => {
    this.setState({
      userEditObject: user
    });
  }
  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
  }
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }
  deleteUser = (idUser) => {
    var tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data: tempData
    });
  }
  render() {

    var ketqua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    })
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search getUserInfoForApp={(info) => this.getUserInfoForApp(info)}
                userEditObject={this.state.userEditObject}
                checkConnectProps={(dl) => this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()} />
              <TableData
                deleteUser={(idUser) => this.deleteUser(idUser)}
                editFunc={(user) => this.editUser(user)} dataUserProps={ketqua}
                changeEditUserStatus={() => this.changeEditUserStatus()} />
              <AddUser
                add={(name, tel, Permission) => this.getNewUserData(name, tel, Permission)}
                hienThiForm={this.state.hienThiForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
