// import { TableData } from '@/types/partOne';
import { TableData } from '@/types/partOne';
import { useGetTableData } from '@utils/tabOne';
import { useEffect, useMemo, useState } from 'react';
// import { useCallback } from 'react';

// table列表的参数
export const useTableDataSearchParams = () => {
  const [param, setParam] = useState({
    fundName: ''
  });
  return [useMemo(() => ({ ...param, fundName: param.fundName }), [param]), setParam] as const;
};
export const useSelectData = () => {
  // 调接口拿数据
  const [selectData, setSelectData] = useState<{ value: string; label: string }[]>([
    {
      value: '10',
      label: '基本面额'
    },
    {
      value: '20',
      label: '历史数据'
    },
    {
      value: '30',
      label: '型号等级'
    }
  ]);
  return [selectData, setSelectData] as const;
};

// export const useTableDataModal = (param: { fundName: string }) => {
// 	const { data: tableData, isLoading } = useGetTableData(param);
// 	return {
// 		data: tableData?.outDto?.fundInfoList ?? [],
// 		isLoading
// 	};
// };

export const useTableDataModal = (param: { fundName: string }) => {
  const { data: tableData, isLoading } = useGetTableData(param);
  // console.log(tableData?.outDto?.fundInfoList ?? [], 'tableData?.outDto?.fundInfoList ?? []');
  // const arrTemp = tableData?.outDto?.fundInfoList ?? [];
  // console.log(arrTemp, 'arrTemp');
  // console.log(param, 'param');
  console.log(tableData, 'data 00000000000');
  const [value, setValue] = useState([]);
  console.log(value, '-------value------');

  useEffect(() => {
    if (tableData && tableData.outDto && tableData.outDto.fundInfoList) {
      setValue(tableData.outDto.fundInfoList);
    }
  }, [isLoading]);

  // const [value, setValue] = useState([
  // 	{
  // 		fq_price: 100
  // 	},
  // 	{
  // 		fq_price: 1200
  // 	}
  // ]);
  // console.log(value, '*********** value **********');
  const upBtn = () => {
    const copy = JSON.parse(JSON.stringify(value));
    copy.sort((a, b) => a.fq_price - b.fq_price);
    setValue(copy);
  };
  const downBtn = () => {
    const copy = JSON.parse(JSON.stringify(value));
    copy.sort((a, b) => b.fq_price - a.fq_price);
    setValue(copy);
  };
  return {
    // data: tableData?.outDto?.fundInfoList ?? [],
    // isLoading
    value,
    setValue,
    upBtn,
    downBtn,
    isLoading
  };
};

export const useArray = (data: TableData) => {
  const [value, setValue] = useState(data);
  return {
    value,
    setValue,
    upBtn: () => {
      const copy = JSON.parse(JSON.stringify(value));
      copy.sort((a, b) => a.fq_price - b.fq_price);
      setValue(copy);
    },
    downBtn: () => {
      const copy = JSON.parse(JSON.stringify(value));
      copy.sort((a, b) => b.fq_price - a.fq_price);
      setValue(copy);
    }
  };
};
