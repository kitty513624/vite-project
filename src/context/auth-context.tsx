import React, { ReactNode } from 'react';
const AuthContext = React.createContext<
	| {
			token: string;
			btnTitle: string[];
	  }
	| undefined
>(undefined);
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	// TODO 这里调用接口获取值
	const { token, btnTitle } = { token: '123456', btnTitle: ['よくあるご質問', 'お問い合わせ', 'サイトマップ'] };
	// eslint-disable-next-line
	return <AuthContext.Provider children={children} value={{ token, btnTitle } as const} />;
};

export const useAuth = () => {
	const context = React.useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth必须在AuthProvider中使用');
	}
	return context;
};
