import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Chat from './Pages/chat/Chat';
import Navbar from './components/Navbar';
import Matchmaking from './Pages/Matchmaking';
import Profile from './Pages/Profile';
import Settings from './Pages/Settings';
import Login from './Pages/login/Login';
import Signup from './Pages/signup/Signup';
import BusinessModel from './Pages/BusinessModel';
import LeaderBoard from './Pages/LeaderBoard';

function Layout() {
    return (
        <div className="flex h-screen">
            <Navbar />
            <Outlet />
        </div>
    );
}

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/matchmaking" element={<Matchmaking />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/leaderboard" element={<LeaderBoard />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
};

export default App;
