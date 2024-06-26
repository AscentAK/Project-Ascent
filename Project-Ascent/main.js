import './style.css';
import galleryPage from './app'
import { battlePage } from './app';

// const appDiv = document.querySelector('#app');
// app(appDiv);

const agentDiv = document.querySelector('#agents');
console.log(agentDiv)
galleryPage(agentDiv)

const teamSection = document.querySelector('#team')
battlePage(teamSection)




