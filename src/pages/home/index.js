import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Table, Button, Popconfirm } from 'antd';

import addLoad from '../../services/decorators/addLoad';
import { bookCRUD } from '../../actions/cruds';

@addLoad({
  mapMethods: bookCRUD
})
export default class Books extends React.PureComponent {
  state = { array: [] };

  componentWillMount() {
    this.initLoad();
  }

  initLoad = async () => {
    const array = await this.props.getList();
    this.setState({array});
  };

  deleteItem = async item => {
    await this.props.deleteRequest(item.id);
    return this.initLoad();
  };

  actions = item => (
    <span>
      <Button>Edit</Button>
       <Popconfirm
         title="Are you sure you want to delete?"
         onConfirm={() => this.deleteItem(item)}
       >
         <Button>delete</Button>
       </Popconfirm>
    </span>
  );

  render() {
    return <React.Fragment>
      <Table
        dataSource={this.state.array}
        loading={this.props.loading}
        columns={[
          {dataIndex: 'title', title: 'Title'},
          { title: 'Title', render: this.actions}
        ]}
        pagination={false}
      />
    </React.Fragment>
  }
}


// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       increment,
//       incrementAsync,
//       decrement,
//       decrementAsync,
//       changePage: () => push('/about-us')
//     },
//     dispatch
//   );

