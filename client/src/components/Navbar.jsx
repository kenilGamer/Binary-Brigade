/* eslint-disable no-unused-vars */
import { MdOutlineLogout } from 'react-icons/md';
import { GoHome } from 'react-icons/go';
import { LiaHandshake } from 'react-icons/lia';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import { RiSettingsLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { Button } from "@chakra-ui/react";
import { auth } from '../Firebase/Firebase';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            dispatch(logoutUser());
            alert('You have been logged out.');
        } catch (error) {
            console.error('Error signing out:', error);
            alert('Error signing out. Please try again.');
        }
    };

    return (
        <div className="accent-bg h-screen w-14 p-2 shadow-[0px_1px_4px_#00000070] flex flex-col items-center justify-between flex-shrink-0">
            <img src="logo.png" alt="SkillSwap" />
            <div className="flex flex-col gap-4 items-center">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    <GoHome className="m-[6px]" size="25px" />
                </NavLink>
                <NavLink to="/matchmaking" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    <LiaHandshake className="m-[6px]" size="25px" />
                </NavLink>
                <NavLink to="/chat" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    <IoChatbubbleEllipsesOutline className="m-[6px]" size="25px" />
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    <FaRegUser className="m-[6px]" size="23px" />
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    <RiSettingsLine className="m-[6px]" size="25px" />
                </NavLink>
                <NavLink to="/leaderboard" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    <LiaHandshake className="m-[6px]" size="25px" />
                </NavLink>
            </div>
            {/* <span>{user.email}</span> */}
            <button className='bg-sky-400 rounded-full p-1 text-white' onClick={handleLogout}>   
                <MdOutlineLogout size="30px" className="rotate-180" />
            </button>
        </div>
    );
};

export default Navbar;
