import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import houseOnHill from '../music/houseOnHill.mp3';
import forestHouse from '../images/forestHouse.jpg';
import { VolumeSlash, VolumeHigh } from 'iconsax-react';
import { useLocation } from 'react-router-dom';
import crashingThroughFloor from '../soundEffects/CrashingThroughFloor.mp3';
import PainScream from '../soundEffects/PainScream.mp3';
import BearTrap from '../soundEffects/BearTrap.mp3';
import ManCrying from '../soundEffects/ManCrying.mp3';


const FrontDoor = () => {
    const navigate = useNavigate();
    const [isMuted, setIsMuted] = useState(false);
    const [storyIndex, setStoryIndex] = useState(0);
    
    const crashing = new Audio(crashingThroughFloor);
    const pain = new Audio(PainScream);
    const bearTrap = new Audio(BearTrap);
    const ManCryingSound = new Audio(ManCrying);

    const location = useLocation();

    // From here we access the multiple variables passed from the previous screen.
    const calledOut = location.state.calledOut;
    const findShelter = location.state.findShelter;

    useEffect(() => {


        return () => {
            // Cleanup if needed
            pain.pause();
            ManCryingSound.pause();
        };
    }, []);

    const continueButton = () => {
        setStoryIndex((prevIndex) => prevIndex + 1);
    };


    const plummeted = () => {

        crashing.play();
        setTimeout(() => {
            bearTrap.play();
        }, 1000);
        setTimeout(() => {
            pain.play();
        }, 1000);
        return "plummeted";
    }

    const whimper = () => {
        ManCryingSound.play();
        return "whimper";
    }


    return (

        <div className="h-screen bg-black">
            <div className="fade-in-text flex h-3/5 items-center justify-center">

                {storyIndex === 0 && (
                    <TypeAnimation
                        className="text-2xl text-justify text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"

                        sequence={[
                            `The moment you stepped inside you ${plummeted()} through the ground. Your leg got caught in a bear trap, its teeth sinking deep into your mangled flesh.`,

                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}

                {storyIndex === 1 && (
                    <TypeAnimation
                        className="text-2xl text-justify text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"

                        sequence={[
                            `You desperately claw at the sides of the bear trap, trying to yank it open. You can't help but ${whimper()}.`,
                            3000,
                            "Despite your struggles, your leg remains ensnared, and the pitch-black surroundings offer no assistance.",
                            3000,
                            "After minutes of agonizing strife, you start feeling lightheaded. The loss of blood is taking its toll. You drift in and out of consciousness until the pain finally ebbs away, silencing your whimpers.",
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}

                {/* Navigating to the next screen and taking our choices too. */}
                {storyIndex === 2 && (
                    navigate('/GameOver', {
                    })
                )}




            </div>

            {/* Button to Continue */}
            <div className='absolute inset-x-0 bottom-32 text-center'>
                <button className='font-serif text-2xl text-slate-200 sm:font-serif sm:text-4xl sm:text-slate-200 sm:hover:animate-pulse sm:cursor-pointer' onClick={continueButton}>
                    Continue
                </button>
            </div>



        </div >
    );
};

export default FrontDoor;
