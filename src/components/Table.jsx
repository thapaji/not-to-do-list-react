import React from "react";

export const Table = () => {
  return (
    <div className="row mt-5 pt-2">
      {/* <!-- 1. entry list --> */}
      <div className="col-md">
        <h3 className="text-center">Task Entry List</h3>
        <hr />
        <table className="table table-striped table-hover border opacity">
          <tbody id="entry"></tbody>
        </table>
      </div>

      {/* <!-- 2. bad list  --> */}
      <div className="col-md">
        <h3 className="text-center">Bad List</h3>
        <hr />
        <table className="table table-striped table-hover border opacity">
          <tbody id="bad"></tbody>
        </table>
        <div className="alert alert-info">
          You could have save = <span id="badHr">0</span>hr
        </div>
      </div>
    </div>
  );
};
