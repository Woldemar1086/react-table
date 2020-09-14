import React from 'react';

function TableBody({ items }) {
  return (
    <div className="table-body">
      {items.map((item, index) => {
        return (
          <div className="table-body-item" key={`table-body-item-${index}`}>
            <div className="table-body-item-title">
              {item.itemTitle} ({item.amount})
            </div>
            <div className="table-body-item-price">{item.price}</div>
          </div>
        );
      })}
    </div>
  );
}

export default TableBody;
