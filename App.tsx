import React from 'react'
import Router from './src/components/Router';
import { LoginContextProvider } from './src/contexts/LoginContexts';
export default function App() {

  return (

<LoginContextProvider>
<Router />
</LoginContextProvider>
  );
}