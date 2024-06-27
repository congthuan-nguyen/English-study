import { Table } from "antd";
import React from "react";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";

const ResizableTitle = (props) => {
  const { onResize, width, ...restProps } = props;
  if (width === undefined) {
    return <td {...restProps}></td>;
  }
  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <td {...restProps}></td>
    </Resizable>
  );
};

export default class MyTable extends React.Component {
  constructor(props) {
    const dataSource = props.dataSource;
    const columns = props.columns;
    super(props);
    this.state = {
      dataSource,
      columns: columns.map((col) => {
        col.onHeaderCell = () => ({
          width: col.width,
          onResize: this.handleResize(col),
        });
        col.onCell = () => ({
          width: col.width,
          onResize: this.handleResize(col),
        });
        return col;
      }),
    };
  }

  components = {
    // header: {
    //   cell: ResizableTitle
    // },
    body: {
      cell: ResizableTitle,
    },
  };

  handleResize =
    (column) =>
    (e, { size }) => {
      this.setState(({ columns }) => {
        columns.forEach((item) => {
          if (item === column) {
            item.width = size.width;
          }
        });

        return { columns };
      });
    };

  render() {
    return (
      <div>
        <Table
          bordered
          dataSource={this.state.dataSource}
          columns={this.state.columns}
          components={this.components}
        />
      </div>
    );
  }
}
