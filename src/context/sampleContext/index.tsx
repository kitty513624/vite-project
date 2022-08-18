import { ReactNode } from 'react';
import { SampleProvider } from './sample-context';
// import { QueryClientProvider, QueryClient } from 'react-query';

export const SampleProviders = ({ children }: { children: ReactNode }) => {
  return (
    // <AuthProvider children={children}/>
    // <QueryClientProvider client={new QueryClient()}>
    <SampleProvider>{children}</SampleProvider>
    // </QueryClientProvider>
  );
};
