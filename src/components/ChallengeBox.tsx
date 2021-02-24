import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
    const hasActiveChalenge = true;

    const { activeChellenge, resetChellenge } = useContext(ChallengesContext)


    return (
        <div className={styles.challengeBoxContainer}>
          {activeChellenge ? (
              <div className={styles.challengeActive}> 
                <header>Ganhe {activeChellenge.amount} xp</header>

                <main>
                    <img src={`icons/${activeChellenge.type}.svg`} />
                    <strong>Novo desafio</strong>
                    <p>{activeChellenge.description}</p>
                </main>
                <footer>
                   <button type="button" className={styles.challengeFailButton} onClick={resetChellenge}>Cancel</button> 
                   <button type="button" className={styles.challengeSucceededButton}>Succeded</button> 
                </footer>
              </div>
          ) : (
                <div className={styles.challengeBoxNotActive}>
                <strong> Finalize um ciclo para receber desafios a serem completos</strong>
                <p>
                    <img src="icons/level-up.svg" alt="levelUp" />
                    Complite chellenges to Level UP 
                </p>
        </div>
          )}

        </div>
    )
}