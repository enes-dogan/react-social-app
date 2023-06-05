import './App.css';
import { useState } from 'react';
import MainHeader from './components/MainHeader';
import PostsList from './components/PostsList';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
    hideModalHandler();
  }
  function mainHeader(params: any) {}
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isPosting={modalIsVisible} />
      </main>
    </>
  );
}

export default App;
