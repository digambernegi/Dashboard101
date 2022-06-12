import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

function Employee() {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-2xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        toolbar={['Search']}
        width='auto'
        dataSource={employeesData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search,Toolbar]} />
      </GridComponent>
    </div>
  );
}

export default Employee;
