import React, { ReactNode } from 'react';
import { useRowTable } from './tableRow';
import { TableData } from '@/types/partOne';
const AuthContext = React.createContext<
  | {
      token: string;
      btnTitle: string[];
      rowTable: Partial<TableData> | undefined;
      setRowTable: (param: Partial<TableData>) => void;
    }
  | undefined
>(undefined);
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // TODO 这里调用接口获取值
  const { token, btnTitle } = { token: '123456', btnTitle: ['よくあるご質問', 'お問い合わせ', 'サイトマップ'] };
  const rowData = useRowTable();
  // eslint-disable-next-line
  return <AuthContext.Provider children={children} value={{ token, btnTitle, ...rowData } as const} />;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth必须在AuthProvider中使用');
  }
  return context;
};
