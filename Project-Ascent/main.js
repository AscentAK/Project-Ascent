import './style.css';
import { galleryPage, formResult, battlePage, battleResults } from './app.js'

// const appDiv = document.querySelector('#app');
// app(appDiv);

// const agentDiv = document.querySelector('#agents');
// galleryPage(agentDiv)

const team1 = document.querySelector('#form-results')
formResult(team1)

const teamSection = document.querySelector('#team')
battlePage(teamSection)

const battleSec = document.querySelector('#battle-results');
battleResults(battleSec)



const main = () => {
  const agentDiv = document.querySelector('#agents');
  galleryPage(agentDiv);

  // document.body.addEventListener('load', agentDiv)
}

main()



