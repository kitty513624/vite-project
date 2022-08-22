import React, { ReactNode, useState } from 'react';

const sampleContext = React.createContext<any>(null);

export const SampleProvider = ({ children }: { children: ReactNode }) => {
    const [num, setNum] = useState(10000);
    return <sampleContext.Provider value={{ num, setNum }}>{children}</sampleContext.Provider>;
};

export const useSampleContext = () => {
    const context = React.useContext(sampleContext);
    if (!context) {
        throw new Error('useAuth必须在AuthProvider中使用');
    }
    return context;
};
