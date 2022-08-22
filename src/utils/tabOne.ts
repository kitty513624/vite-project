import { TableData } from '@/types/partOne';
import { fetchHomeList } from '@api/WPLETitT003Rlst10';
import { useQuery } from 'react-query';

export const useGetTableData = (param: { fundName: string }) => {
    // 指定返回值类型
    return useQuery<TableData[], Error>(['getTableDataList', param], () => fetchHomeList(param));
};
