import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Prompt from './pages/Prompt';
import Create from './pages/Create'
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import Avatar from './pages/Avatar';
import NotFound from './pages/NotFound';
import PromptJ from './pages/PromptJ';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Router>
          <Header />
<<<<<<< HEAD
          <Avatar />
          {/* <Body /> */}
          {/* <Prompt /> */}
=======
>>>>>>> 1cc98257f402670d93056843d17d93942ab859ac
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/prompt" element={<Prompt />} />
            <Route path="/promptj" element={<PromptJ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router> 
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
