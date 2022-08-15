import React, { FC, useState, useEffect } from 'react';
import { fetchHomeList } from '@api/WPLETitT003Rlst10';
import { DataSourceType } from './dataSource';

// 模拟数据接口，2 秒后返回数据
const getDataList = (query) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('kaimo-query', query);
      resolve([6, 7, 8, 9, 10]);
    }, 2000);
  });
};

const useTableData = (activeKey) => {
  const [data, setData] = useState([] as any);
  const [query, setQuery] = useState('');
  useEffect(() => {
    const getData = async () => {
      // const d = await fetchHomeList(query);
      const res: any = await fetchHomeList({ fundName: '' });
      if (res.outDto) {
        const data = (res.outDto.fundInfoList || []).map((val) => {
          return {
            ...val,
            heart: Math.round(Math.random() * 1) == 1 ? false : true,
            star_number: Math.round(Math.random() * 5)
          };
        });
        setData(data);
      }
    };
    getData();
  }, []);
  return { data, setData };
};

export default useTableData;
