import './style.css';
import galleryPage, { formResult } from './app'
import { battlePage } from './app';

// const appDiv = document.querySelector('#app');
// app(appDiv);

const agentDiv = document.querySelector('#agents');
galleryPage(agentDiv)

const team1 = document.querySelector('#results')
formResult(team1)

const teamSection = document.querySelector('#team')
battlePage(teamSection)






