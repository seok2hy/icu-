import React from 'react';

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Category</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <tr>
              <td>{index + 1}</td>
              <td>고성방가</td>
              <td>{item.loudSinger}</td>
            </tr>
            <tr>
              <td>{index + 1}</td>
              <td>흡연</td>
              <td>{item.smoking}</td>
            </tr>
            <tr>
              <td>{index + 1}</td>
              <td>절도</td>
              <td>{item.theft}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default Table;