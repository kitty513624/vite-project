import { useQueryClient } from 'react-query';
const Eight = () => {
  const queryClient = useQueryClient();
  const getTableDataList = queryClient.getQueryData('getTableDataList');
  console.log(getTableDataList, '--------getTableDataList---------');
  return <div>Eight</div>;
};
export default Eight;
