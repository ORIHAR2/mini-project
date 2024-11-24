import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import mainMenu from '../images/mainMenu.png';
import ForlornMainTheme from '../music/ForlornMainTheme.mp3';
import { VolumeSlash, VolumeHigh } from 'iconsax-react';
import Modal from 'react-modal';

function Home() {
    const navigate = useNavigate();
    const [isMuted, setIsMuted] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);

    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current || new Audio(ForlornMainTheme);
        audio.loop = true; // Enable looping

        // Set initial mute state
        audio.muted = isMuted;

        // Play the audio
        audio.play().catch((error) => {
            console.error('Autoplay prevented:', error);
        });

        audioRef.current = audio;   // Save the audio element in the ref. We do this to avoid starting the music from the start when the user toggles mute.

        return () => {
            // Cleanup if needed
            audio.pause();
        };
    }, [isMuted]);

    //Navigate to opening screen on start
    const startGame = () => {
        navigate('/opening');
    };

    // Toggle mute state
    const toggleMute = () => {
        setIsMuted((prevIsMuted) => !prevIsMuted);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        toggleMute();
    };


    const toggleFullscreen = () => {
        if (document.fullscreenElement) {
            // If already in fullscreen, exit fullscreen
            document.exitFullscreen().catch((err) => console.error(err));
            setIsFullscreen(false);
        } else {
            // If not in fullscreen, enter fullscreen
            document.documentElement.requestFullscreen().catch((err) => console.error(err));
            setIsFullscreen(true);
        }
    }

    const modalStyles = {
        content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            textAlign: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            background: 'linear-gradient(to right, #6a11cb, #2575fc)',
            color: 'white',
        },
    };

    return (
        <div className="h-screen bg-cover flex flex-col " style={{ backgroundImage: `url(${mainMenu})` }}>
            <div className='flex h-1/4 items-center justify-center'>
                <h1 className="font-serif text-7xl text-slate-400 cursor-pointer sm:text-9xl sm:text-slate-400 sm:hover:text-slate-700 sm:cursor-pointer sm:font-serif ">(The game of Justice) </h1>
            </div>

            <div className='flex h-1/3 items-center justify-center'>
                <h1 onClick={startGame} className="font-serif text-5xl text-slate-400 sm:text-7xl sm:text-slate-400 sm:hover:text-slate-500 sm:hover:animate-pulse sm:cursor-pointer sm:font-serif">Start Game
                </h1>
            </div>

            <Modal
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 text-center rounded-lg shadow-md bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                isOpen={isModalOpen}
                onRequestClose={handleModalClose}
                contentLabel="Sound Warning Modal"
                style={modalStyles}
            >
                <p className="text-white">The game is best experienced with headphones/earphones.</p>
                <button
                    onClick={handleModalClose}
                    className="cursor-pointer bg-black text-white py-2 px-4 rounded-full border-none mt-4"
                >
                    OK
                </button>
            </Modal>


            <div className='absolute bottom-0 left-0 ml-5 mb-5 max-w-64 sm:ml-10 sm:mb-5 sm:max-w-max'>
                <h1 className='font-serif text-base text-slate-300 sm:font-serif sm:text-2xl sm:text-slate-300'>
                    The game is best played in{' '}
                    <span onClick={toggleFullscreen} className="font-serif text-base text-slate-400 sm:font-serif sm:text-2xl sm:text-slate-400 sm:hover:text-slate-500 sm:hover:animate-pulse sm:cursor-pointer">
                        Fullscreen Mode
                    </span>
                </h1>
                <h1 className='font-serif text-base text-slate-300 max-w-64 mt-2 sm:font-serif sm:text-2xl sm:text-slate-300 sm:max-w-max sm:mt-2'>
                    Note: Only hit continue if the text hasn't changed after three seconds.
                </h1>
            </div>

            <div className='flex h-96 items-end justify-end mr-3'>
                <button onClick={toggleMute}>
                    {isMuted ? <VolumeSlash size="70" color="gray" /> : <VolumeHigh size="70" color="gray" />}
                </button>
            </div>

        </div>
    );
}


export default Home;
