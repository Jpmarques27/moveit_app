import { createContext, useState, ReactNode } from 'react'
import challenges from '../../challenges.json'

    interface challenge{
        type: 'body' | 'eye';
        description:string;
        amount: number;
    }

interface ChallengesContextData{
    level: number;
    currentExpirence: number;
    challengesCompleted:number;
    levelUp: ()=>void;
    experienceToNextLevel: number;
    starNewChallenge: ()=> void;
    activeChellenge: challenge;
    resetChellenge: ()=> void;
}
 
interface ChallengesProviderProps{
    clildren: ReactNode;
}
export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({children}){
    const [level, setLevel] = useState (1);
    const [currentExpirence, setCurrentExperience] = useState(30);
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    const [activeChellenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp(){
        setLevel(level +1);
    }

    function starNewChallenge(){
        const randomChallengeIndex = Math.floor (Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)
    }

    function resetChellenge(){
        setActiveChallenge(null)
    }
   
    return(
        <ChallengesContext.Provider value={{
         currentExpirence,
         challengesCompleted, 
         level, 
         levelUp,
         starNewChallenge,
         activeChellenge,
         resetChellenge,
         experienceToNextLevel,
         }}
         >
            {children}
        </ChallengesContext.Provider>    
    )
}