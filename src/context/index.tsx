import { ReactNode } from 'react';
import { AuthProvider } from './auth-context';
import { QueryClientProvider, QueryClient } from 'react-query';

export const AppProviders = ({ children }: { children: ReactNode }) => {
	return (
		// <AuthProvider children={children}/>
		<QueryClientProvider client={new QueryClient()}>
			<AuthProvider>{children}</AuthProvider>
		</QueryClientProvider>
	);
};
