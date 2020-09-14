import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

function TablesContainer() {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.tableData.data);
  const names = useSelector((state) => state.tableData.names);

  const [data, setData] = useState([]);

  useEffect(() => {
    let structuredData = [];
    tableData.Value.Goods.forEach((item) => {
      let groupIndex = undefined;
      const hasAGroup = structuredData.some((someItem, index) => {
        if (someItem.group === item.G) {
          groupIndex = index;
          return true;
        }
      });

      if (hasAGroup) {
        let newItem = {
          itemTitle: names[item.G].B[item.T].N,
          price: item.C,
          amount: item.P,
        };
        structuredData[groupIndex].items.push(newItem);
      } else {
        let newItem = {
          title: names[item.G].G,
          group: item.G,
          items: [
            {
              itemTitle: names[item.G].B[item.T].N,
              price: item.C,
              amount: item.P,
            },
          ],
        };
        structuredData.push(newItem);
        console.log(structuredData);
      }
    });
    setData(structuredData);
  }, [setData]);

  return (
    <div>
      {data.map((item) => {
        return (
          <div className="table-container" key={item.group}>
            <TableHeader title={item.title} />
            <TableBody items={item.items} />
          </div>
        );
      })}
    </div>
  );
}

export default TablesContainer;
