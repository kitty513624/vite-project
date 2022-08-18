import { TableData } from '@/types/partOne';
import { useState } from 'react';

export const useRowTable = () => {
  const [rowTable, setRowTable] = useState<Partial<TableData>>();
  return {
    rowTable,
    setRowTable
  };
};
