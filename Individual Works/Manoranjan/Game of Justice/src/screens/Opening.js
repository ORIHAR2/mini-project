import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import MenuMusic from '../music/Jungle.mp3';
import jungle from '../images/jungle.jpg';
import callOut from '../soundEffects/IsAnyoneOutThere.mp3';
import { useNavigate } from 'react-router-dom';
import walkBushes from '../soundEffects/walkBushes.mp3';
import { VolumeSlash, VolumeHigh } from 'iconsax-react';
import crashingThroughFloor from '../soundEffects/CrashingThroughFloor.mp3';
import PainScream from '../soundEffects/PainScream.mp3';
import BearTrap from '../soundEffects/BearTrap.mp3';
import ManCrying from '../soundEffects/ManCrying.mp3';

const Opening = () => {
    const navigate = useNavigate();
    const [isMuted, setIsMuted] = useState(false);
    const [storyIndex, setStoryIndex] = useState(0);
    const [isSelected1, setIsSelected1] = useState(false);
    const [isSelected2, setIsSelected2] = useState(false);
    const [calledOut, setCalledOut] = useState(false);
    const [findShelter, setFindShelter] = useState(false);
    const audioRef = useRef(null);
    const crashing = new Audio(crashingThroughFloor);
    const pain = new Audio(PainScream);
    const bearTrap = new Audio(BearTrap);
    const ManCryingSound = new Audio(ManCrying);
    useEffect(() => {
        const audio = new Audio(MenuMusic);
        audio.loop = true; // Enable looping

        // Play the audio
        audio.play().catch((error) => {
            console.error('Autoplay prevented:', error);
        });

        return () => {
            // Cleanup if needed
            audio.pause();
            pain.pause();
            ManCryingSound.pause();
        };
    }, []);
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


    const continueButton = () => {


        //Resetting states
        setIsSelected1(false);
        setIsSelected2(false);

        //Incrementing storyIndex for next sequence
        setStoryIndex((prevIndex) => prevIndex + 1);

    };

    // const toggleMute = () => {
    //     // Toggle mute state
    //     setIsMuted((prevIsMuted) => !prevIsMuted);
    // };

    // First Choice
    const callDarkness = () => {
        setIsSelected1(true);
        setIsSelected2(false);
        setCalledOut(true);
    }

    const stayQuiet = () => {
        setIsSelected2(true);
        setIsSelected1(false);
        setCalledOut(false);
    }

    // Second Choice
    const weapon = () => {
        setIsSelected1(true);
        setIsSelected2(false);
        setFindShelter(false);
    }

    const shelter = () => {
        setIsSelected2(true);
        setIsSelected1(false);
        setFindShelter(true);

    }

    //Callout sound
    const call = () => {
        const callout = new Audio(callOut);
        callout.play();
        return "call";
    }

    const walking = () => {
        const walk = new Audio(walkBushes);
        walk.play();
        return "walking";
    }


    return (
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${jungle})` }}>
            <div className="fade-in-text flex h-3/5 items-center justify-center">

                {/* Story Sequence starts here */}
                {storyIndex === 0 && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-400 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-400 sm:inline-block"

                        sequence={[
                            "You are Inspector Aditya, sent to investigate a remote village called Rudrapur. The village is suffering from crises linked to the neglect of Directive Principles of State Policy (DPSP).",
                            1000,
                
                             "Your choices will determine the safety and well-being of the villagers. Each decision reflects the principles enshrined in the Indian Constitution, and your success or failure will shape the village’s future."
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                    />
                )}

                {storyIndex === 1 && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-400 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-400 sm:inline-block"

                        sequence={[
                            "Scenario 1: The Jungle Path",
                            2000,
                            "You step into the dense jungle as dusk falls, the air thick with the scent of moss and wet earth. The trees seem to whisper ominously, their branches swaying like bony fingers.",
                            2000,
                             "As you make your way deeper, you hear the sound of muffled cries from the bushes to your left and the distinct roar of a tiger to your right."

                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                    />
                )}

                {storyIndex === 2 && (
                    <div className='justify-center items-center mt-28 sm:justify-center sm:items-center sm:mt-48'>
                        <h1 className='ml-2 text-justify font-serif text-4xl text-slate-400 sm:text-justify sm:font-serif sm:text-7xl sm:text-slate-400 '>You...</h1>
                        <div className=' mt-20 sm:mt-28'>
                            <button
                                className={`ml-2 font-serif text-left text-2xl text-slate-400 sm:mr-20 sm:font-serif sm:text-4xl sm:text-slate-400 sm:cursor-pointer sm:inline-block 
                                    ${isSelected1 ? 'border-b-4 border-gray-700' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => callDarkness()}
                            >
                                Investigate the Cry for Help
                            </button>

                            <button
                                className={` ml-2 mt-14 font-serif text-left text-2xl text-slate-400 sm:ml-20 sm:font-serif sm:text-4xl sm:text-slate-400 sm:cursor-pointer sm:inline-block 
                                    ${isSelected2 ? 'border-b-4 border-gray-700' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => stayQuiet()}
                            >
                                 Ignore the cry and go towards roar
                            </button>
                        </div>
                    </div>
                )}

                {/* Call Out */}
                {storyIndex === 3 && calledOut === true && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-400 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-400 sm:inline-block"
                        sequence={[
                            `'(Article 46 - Protect the Weaker Sections of Society)`,
                            2000,
                            "Result: You free the boy and carry him to safety. Just as you’re about to leave, a tiger emerges from the darkness. However, you’ve earned the boy’s trust, and he shows you a hidden path that leads you safely away.",
                            2000,
                            "'(Right Choice: By helping the weak, you adhered to Article 46 and were rewarded with survival.)villagers cheer, praising your bravery. Your team members, skilled and coordinated, manage to track and capture the tiger '",
                            2000,
                            "However, the real threat still looms—a far more sinister one. You’ve heard the rumors, and the boy confirms them with a shaky voice: the children who have been disappearing from the village are being held in a cursed mansion deep within the jungle. The villagers believe that an evil spirit, or perhaps something worse, is keeping them there, hidden from the world.",
                            2000,
                            "You know that finding this mansion is your next step, but the jungle is dense, with no clear path ahead. Two paths stretch out before you:"


                            
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                    />
                )}

                {/* Stay Quiet */}
                {storyIndex === 3 && calledOut === false && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-400 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-400 sm:inline-block"
                        sequence={[
                            "(Violation of Article 46 - Neglecting Vulnerable Sections)",
                            2000,
                            `You decide to ignore the cry, focusing instead on the tiger. You believe that tackling the danger head-on is the best course of action. However, as you prepare to face the animal, ${plummeted()} it pounces with terrifying speed, killing you instantly.`,
                            2000,
                            `(Wrong Choice: By neglecting the vulnerable, you violated Article 46, ${whimper()} which stresses the protection of weaker sections. The jungle punished your selfishness with death.)`
                            // 2000,
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                        
                    />
                )}
                 {storyIndex === 4 && calledOut === false &&(
                    navigate('/GameOver', {
                    })
                )}
                {storyIndex === 4 && (
                    
                    <div className='justify-center items-center mt-28 sm:justify-center sm:items-center sm:mt-48'>
                        <h1 className='ml-2 text-justify font-serif text-4xl text-slate-400 sm:text-justify sm:font-serif sm:text-7xl sm:text-slate-400 '>You...</h1>
                        <div className=' mt-20 sm:mt-28'>
                            <button
                                className={`ml-2 font-serif text-left text-xl text-slate-400 sm:mr-20 sm:font-serif sm:text-4xl sm:text-slate-400 sm:cursor-pointer sm:inline-block 
                                    ${isSelected1 ? 'border-b-4 border-gray-700' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => weapon()}
                            >
                                Choose The Left Path
                            </button>

                            <button
                                className={` ml-2 mt-14 font-serif text-left text-xl text-slate-400 sm:ml-20 sm:font-serif sm:text-4xl sm:text-slate-400 sm:cursor-pointer sm:inline-block 
                                ${isSelected2 ? 'border-b-4 border-gray-700' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => shelter()}
                            >
                                Choose the Right Path
                            </button>
                        </div>
                    </div>
                )}

                {storyIndex === 5 && findShelter === true && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-400 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-400 sm:inline-block"
                        sequence={[
                            `You start ${walking()} Walking, the left path looks darker and more treacherous, but you remember rumors that it leads directly to the mansion. Continue...`,
                            2000,
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}

                {storyIndex === 5 && findShelter === false && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-400 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-400 sm:inline-block"
                        sequence={[
                            `You start ${walking()} Walking, the left path looks darker and more treacherous, but you remember rumors that it leads directly to the mansion. Continue...`,
                            2000,
                            "At one point found a handful of rocks. You pocket them and continue walking. Continue...",
                            2000,
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                    />
                )}

                {/* Navigating to the next screen and taking our choices too. */}
                {storyIndex === 6 && (
                    navigate('/theHouse', {
                        state: {
                            calledOut,
                            findShelter,
                        }
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

export default Opening;
