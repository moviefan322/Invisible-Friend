import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { StoreProvider } from './utils/GlobalState';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Prompt from './pages/Prompt';
import Create from './pages/Create';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [friendSelect, setFriendSelect] = useState('');
  const [temperamentSelect, setTemperamentSelect] = useState('');
  const [ageSelect, setAgeSelect] = useState('');
  const [languageSelect, setLanguageSelect] = useState('');
  const [promptEntered, setPromptEntered] = useState('');
  const [avatarSelect, setAvatarSelect] = useState('');
  const [expertiseSelect, setExpertiseSelect] = useState('');
  const options = {
    friendSelect,
    temperamentSelect,
    ageSelect,
    languageSelect,
    promptEntered,
    avatarSelect,
    expertiseSelect,
    setFriendSelect,
    setTemperamentSelect,
    setAgeSelect,
    setLanguageSelect,
    setPromptEntered,
    setAvatarSelect,
    setExpertiseSelect
  };

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Router>
          <StoreProvider>
            <Header />
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create {...options} />} />
              <Route path="/prompt/:id" element={<Prompt {...options} />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </StoreProvider>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
