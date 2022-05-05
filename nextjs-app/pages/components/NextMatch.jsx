import React from 'react'
import Image from "next/image";
import Style from './NextMatch.module.css'
import c from 'clsx'
import { schedule } from '../data/matchSchedule'
import { teamsWithPlayers } from '../data/teamWithPlayers'


import { useState, useEffect } from 'react'
export default function NextMatch() {
  const [team1, setTeam1] = useState("");
  const [team1Color, setTeam1Color] = useState();
  const [imag1, setImag1] = useState();
  const [team2, setTeam2] = useState("");
  const [team2Color, setTeam2Color] = useState();
  const [imag2, setImag2] = useState();
  const [time, setTime] = useState("");

  const [islive, setIsLive] = useState(false)
  const Statrtime = () => {

    schedule.map(it => {

      {
        it.matchDetails.matches.map((ite) => {

          const todaydate = new Date().toDateString();
          let matchdate = new Date(parseInt(ite.matchInfo.startDate)).toDateString();


          if (matchdate === todaydate) {

            setTeam1(ite.matchInfo.team1.teamSName);
            setTeam2(ite.matchInfo.team2.teamSName);


            let matchtime = ite.matchInfo.startDate;
            let todaytime = new Date().getTime();
            let matchEnd = ite.matchInfo.endDate
            let timeleft = matchtime - todaytime;


            const hours = Math.floor(timeleft / (1000 * 60 * 60));
            const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

            let combinetime = hours + ":" + minutes + ":" + seconds;



            if (timeleft <= 0 && timeleft >= matchEnd) {
              clearInterval(interval.current);
              setIsLive(true);
            } else {
              setTime(combinetime)
            }
          }
        })
      }


    })


  }

  const Color = () => {

    Object.values(teamsWithPlayers).map(it => {
      const teamna = it.shortName.toUpperCase();
      console.log("team 1", team1);
      console.log("team 2", team2);
      if (team1 == teamna) {
        setTeam1Color(it.color);
        setImag1(it.image);

        console.log("team 1color", team1Color);
      }
      else if (team2 === teamna) {
        console.log("team 2", it.color);

        setTeam2Color(it.color);
        setImag2(it.image);

        console.log(team2Color);
      }

    })
  }
  useEffect(() => {
    Statrtime();
    Color();

  }, [team1, team2])

console.log(imag2)









  return (
    <div classnames="container ">
      <button className={c(Style.button, 'w-100 outLine-none p-0 m-0')}>
        <div className=" d-flex flex-row justify-content-between bd-highlight mb-3">
          <div className=" p-2 bd-highlight">
            <div className="d-flex pt-3 justify-content-start">
              <div className="p-2 bd-highlight">
                <div style={{ backgroundColor: `${team1Color}` }} className={c(Style.patty1, "mt-2 bd-highlight")}></div>
              </div>
              <div class="p-2 bd-highlight">
                <Image src={`/images/${imag1}`} className=" float-start " alt="ipl" height={40} width={40} />
              </div>
              <div className="p-2 bd-highlight">
                <div className='m-2'>{team1}</div>
              </div>
            </div>
          </div>

          <div className='p-2'>
            <div className='mt-4 pt-2'>
            {
              !islive ? time:"Live"
            }
            </div>
          </div>

          <div class="p-2 bd-highlight">
            <div class="d-flex pt-3 justify-content-start">
              <div class="p-2 bd-highlight">
                <div className='mt-2'>{team2}</div>
              </div>
              <div class="p-2 bd-highlight">
                <Image src={`/images/${imag2}`} className=" float-start " alt="ipl" height={40} width={40} />
              </div>
              <div class="p-2 bd-highlight">
                <div style={{ backgroundColor: `${team2Color}` }} class={c(Style.patty2, "mt-2 bd-highlight")}></div>
              </div>
            </div>
          </div>
        </div>
      </button>

    </div>
  )
}
