import React from 'react'
import Appheader from "./App_header"
import './App.css';

import { UsernameProvider } from "./UsernameContext";
import { PostProvider } from "./PostContext";
import AppContent from './AppContent';


function App() {
  return (
  <UsernameProvider>
    <PostProvider>
      <Appheader />
      <AppContent />
      </PostProvider>
  </UsernameProvider>

  );
}

export default App;
//background-color: #fafafa;