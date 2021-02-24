import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css'

let coundownTimeout: NodeJS.Timeout

export function Countdown() {
    const {  starNewChallenge } = useContext(ChallengesContext);


    const [time, setTime] = useState(0.1 * 60);
    const[isactive, setActive] = useState(false);
    const [hasFinished, setHashFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    function startCountdonw(){
        setActive(true);
    }

    function resetCountdown(){
        clearTimeout(coundownTimeout)
        setActive(false)
        setTime (0.1*60)
    }

    useEffect(()=>{
        if (isactive && time > 0) {
            coundownTimeout = setTimeout(()=>{
                setTime(time - 1)
            },1000)
        }else if(isactive && time ===0){
            setHashFinished(true);
            setActive(false)
            starNewChallenge()
        }
    },[isactive, time])

    return(
    <div>
        <div className={styles.countdownContainer}>
            <div>
              <span>{minuteLeft}</span> 
              <span>{minuteRight}</span>         
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span> 
            </div>
        </div>

        {hasFinished ? (
            <button disabled 
            onClick={startCountdonw} 
            type="button" 
            className={styles.countdownButton}
            >
                Ciclo encerrado            
            </button>
        ) : <>
            {isactive ? (<button  onClick={resetCountdown} 
                         
                         className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                         >
             Encerrar Ciclo
 
         </button> ) : (
         <button  onClick={startCountdonw} type="button" className={styles.countdownButton}>
             Iniciar o ciclo
         
         </button>)}
          
        </>}


        
    </div>
    )
}