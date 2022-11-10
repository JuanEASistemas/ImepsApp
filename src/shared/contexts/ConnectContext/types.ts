
export interface IConnectContextData {
  isConnected: boolean | null;
  connectToken?: string | null;
}

export interface IConnectProviderProps {
  children: React.ReactNode;
}

