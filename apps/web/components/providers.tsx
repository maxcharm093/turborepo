import { ReactNode } from 'react';

type ProvidersProps = {
  children: ReactNode;
};
const Providers = ({ children }: Readonly<ProvidersProps>) => {
  return <>{children}</>;
};

export default Providers;
