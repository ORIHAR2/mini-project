import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Assailant1 from '../music/AssailantAttacking.mp3';
import AxeMan from '../images/AxeMan.jpg';
import { useLocation } from 'react-router-dom';
import HunterWalking from '../soundEffects/HunterWalking.mp3';
import PeopleScreaming from '../soundEffects/PeopleScreaming.mp3';
import doorCreak from '../soundEffects/doorCreaking.mp3';
import HelpMe from '../soundEffects/HelpMe.mp3';
import AxeHit from '../soundEffects/AxeHit.mp3';

const Assailant = () => {
  const navigate = useNavigate();
  const [storyIndex, setStoryIndex] = useState(0);
  const [choiceMade, setChoiceMade] = useState(null); // Store the player's choice
  const location = useLocation();

  // Accessing variables from the previous screen
  const calledOut = location.state?.calledOut;
  const findShelter = location.state?.findShelter;

  useEffect(() => {
    const audio = new Audio(Assailant1);
    audio.loop = true;
    audio.play().catch((error) => {
      console.error('Autoplay prevented:', error);
    });
    return () => {
      audio.pause();
    };
  }, []);

  const continueButton = () => {
    setStoryIndex((prevIndex) => prevIndex + 1);
  };

  const handleOptionClick = (option) => {
    setChoiceMade(option); // Store the player's choice
    setStoryIndex(2); // Move to the next part of the story
  };

  const creak = () => {
    const creaking = new Audio(doorCreak);
    creaking.play();
    return 'creaks';
  };

  const walking = () => {
    const walkingHunter = new Audio(HunterWalking);
    walkingHunter.play();
    return 'walking';
  };

  const screams = () => {
    const Wailing = new Audio(PeopleScreaming);
    const Wailing2 = new Audio(HelpMe);
    Wailing.play();
    Wailing2.play();
    return 'screams';
  };

  const blows = () => {
    const AxeHitting = new Audio(AxeHit);
    setTimeout(() => {
      AxeHitting.play();
    }, 2000);
    return 'blows';
  };

  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${AxeMan})` }}>
      <div className="fade-in-text flex h-3/5 items-center justify-center">

        {/* Initial Story Section */}
        {storyIndex === 0 && calledOut === true && (
          <TypeAnimation
            className="text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"
            sequence={[
              `As if on cue, you hear someone ${walking()} outside. You quickly realize the person is swiftly approaching the door you entered from.`,
              2000,
              'When the backdoor creaks open, the man is already staring at you. A gruesome figure, the man has messy overgrown hair.',
              2000,
              
            ]}
            wrapper="div"
            speed={60}
            cursor={false}
            omitDeletionAnimation={true}
          />
        )}

        {/* Presenting Choices */}
        {storyIndex === 1 && (
          <div className="justify-center items-center mt-28 sm:justify-center sm:items-center sm:mt-48">
            <h1 className="ml-2 text-justify font-serif text-4xl text-slate-200 sm:text-justify sm:font-serif sm:text-7xl sm:text-slate-200">
              You...
            </h1>
            <div className="mt-20 sm:mt-28">
              <button
                className="ml-2 font-serif text-left text-xl text-slate-200 sm:mr-20 sm:font-serif sm:text-3xl sm:text-slate-200 sm:cursor-pointer sm:inline-block hover:border-b-4 hover:border-gray-700 hover:animate-pulse"
                onClick={() => handleOptionClick('trap')}
              >
                Create a Decoy and Secure the Room
              </button>

              <button
                className="ml-2 mt-14 font-serif text-left text-xl text-slate-200 sm:ml-20 sm:font-serif sm:text-3xl sm:text-slate-200 sm:cursor-pointer sm:inline-block hover:border-b-4 hover:border-gray-700 hover:animate-pulse"
                onClick={() => handleOptionClick('confront')}
              >
                Engage in a High-Stakes Confrontation
              </button>
            </div>
          </div>
        )}

        {/* Story Progression based on choices */}
        {storyIndex === 2 && choiceMade === 'trap' && (
          <TypeAnimation
          className="text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"
          sequence={[
            'Recalling Article 39A of the Constitution, which directs the state to ensure justice and promote the welfare of the people, you decide that taking immediate action is not only necessary for survival but also for protecting the well-being of others.',
            2000,
            'You quickly create a makeshift decoy using objects scattered around the room. This tactical move is meant to mislead the Axe Man into thinking there is a bigger threat in another part of the house.',
            2000,
            'As the Axe Man investigates the decoy, you seize the opportunity to barricade the room and lock the door securely, following the principles of justice and protection outlined in Article 39A.',
            2000,
            'Suddenly, you hear desperate cries of "Help me! Help me!" echoing from the basement, reminding you that your duty doesn’t end with just your own safety.',
            2000,
            () => screams(), // This triggers the scream sound effects
            () => new Audio(HelpMe).play(), // Plays the "Help me" sound effect
            2000,
            'Racing toward the source of the screams, you break open the basement door and find the missing villagers, tied up but alive. You quickly begin freeing them, realizing that your actions align with the principles of Article 39A, ensuring justice and welfare for all.',
            2000,
            'As you finish, backup arrives. Your team, along with members of the village, storm the house and apprehend the psychotic Axe Man.',
            2000,
            'The villagers, now free, thank you for your bravery and quick thinking. They commend you not only for saving them but for acting in the spirit of justice and welfare, as laid out by the DPSP in Article 39A.',
          ]}
          wrapper="div"
          speed={60}
          cursor={false}
          omitDeletionAnimation={true}
        />        
        )}

        {storyIndex === 3 && choiceMade === 'trap' && (
          navigate('/Continued')
        )}

        {storyIndex === 2 && choiceMade === 'confront' && (
          <TypeAnimation
            className="text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"
            sequence={[
              'You confront the Axe Man head-on. The fight is brutal, and despite your best efforts, he overpowers you.',
              2000,
              `The assailant, now in control, delivers relentless and merciless ${blows()} with the axe.`,
              2000,
              'Each strike intensifies the pain until your strength wanes, and darkness descends as the assailant continues the onslaught...',
            ]}
            wrapper="div"
            speed={60}
            cursor={false}
            omitDeletionAnimation={true}
          />
        )}

        {storyIndex === 3 && choiceMade === 'confront' && (
          navigate('/GameOver')
        )}

      </div>

      {/* Button to Continue */}
      {storyIndex < 3 && (
        <div className="absolute inset-x-0 bottom-32 text-center">
          <button className="font-serif text-2xl text-slate-200 sm:font-serif sm:text-4xl sm:text-slate-200 sm:hover:animate-pulse sm:cursor-pointer" onClick={continueButton}>
            Continue
          </button>
        </div>
      )}

    </div>
  );
};

export default Assailant;
