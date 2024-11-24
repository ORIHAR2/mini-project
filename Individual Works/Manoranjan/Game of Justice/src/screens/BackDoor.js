import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import DarkAlley from '../music/DarkAlley.mp3';
import Kitchen from '../images/Kitchen.jpg';
import { useLocation } from 'react-router-dom';
import HelpMe from '../soundEffects/HelpMe.mp3';
import PeopleScreaming from '../soundEffects/PeopleScreaming.mp3';
import doorCreak from '../soundEffects/doorCreaking.mp3';


const BackDoor = () => {
    const navigate = useNavigate();
    const [storyIndex, setStoryIndex] = useState(0);



    const location = useLocation();

    // From here we access the multiple variables passed from the previous screen.
    const calledOut = location.state.calledOut;
    const findShelter = location.state.findShelter;



    useEffect(() => {
        const audio = new Audio(DarkAlley);
        audio.loop = true; // Enable looping

        // Play the audio
        audio.play().catch((error) => {
            console.error('Autoplay prevented:', error);
        });

        return () => {
            // Cleanup if needed
            audio.pause();
        };
    }, []);

    const continueButton = () => {
        setStoryIndex((prevIndex) => prevIndex + 1);
    };


    const screams = () => {
        const Wailing = new Audio(PeopleScreaming);
        const Wailing2 = new Audio(HelpMe);

        Wailing.play();
        Wailing2.play();

        return "screams";
    }


    return (

        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Kitchen})` }}>
            <div className="fade-in-text flex h-3/5 items-center justify-center">

                {storyIndex === 0 && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"

                        sequence={[
                            "You stop inside the house and immediately gag because of the foul stench permeating the air.",
                            2000,
                            "You're in the kitchen, and the room is in shambles. The floor is littered with broken glass and overturned furniture.",
                            2000,
                            "You realize at once that you're not welcome here...",
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                    />
                )}


                {storyIndex === 1 && calledOut == true && (
                    navigate('/Assailant', {
                        state: {
                            calledOut,
                            findShelter,
                        }
                    })
                )}


                {storyIndex === 1 && calledOut == false && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"

                        sequence={[
                            "You walk out of the kitchen and into the hallway. You try the door to your left, but it's locked. You're about to move on when you hear a faint sound coming from the basement.",
                            2000,
                            "'Hello?' you call out.",
                            2000,
                            "What unfolds next sends shivers down your spine, leaving you paralyzed with fear."
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}


                {storyIndex === 2 && calledOut == false && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"

                        sequence={[
                            `Echoing through the air are ${screams()} — agonizing, heart-wrenching, and petrifying screams — emanating from the depths of what seems to be the basement.`,
                            2000,
                            "In that moment, the gravity of the situation dawns on you. You must liberate these people.",
                            2000,
                            "As you are planning this, the door from which you entered creaks open..."
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                    />
                )}

                {storyIndex === 3 && (
                    navigate('/Continued', {
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

export default BackDoor;
