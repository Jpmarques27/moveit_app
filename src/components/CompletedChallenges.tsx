import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CompletedChallenges.module.css'
export function CompledChalenges(){
    const { challengesCompleted } = useContext(ChallengesContext);

    return( 
    <div className={styles.completedChalengesContainer}>
        <span>Desafios completos</span>
        <span>{challengesCompleted}</span>
    </div>
    )  
}