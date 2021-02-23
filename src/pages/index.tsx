import { CompledChalenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Coutdown";
import { ExperienceBar } from "../components/experienceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head'

import  styles  from '../styles/components/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
    <title>Home | Moveit </title>
    </Head>

     <ExperienceBar />
  
      <section>  
        <div>
          <Profile />
          <CompledChalenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
