import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRoomId, setSelectedRoomId] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: string, roomId?: string) => {
    setCurrentPage(page);
    if (roomId) {
      setSelectedRoomId(roomId);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'rooms':
        return <Rooms onNavigate={handleNavigate} />;
      case 'room-details':
        return <RoomDetails roomId={selectedRoomId} onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
