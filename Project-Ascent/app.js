import {
  renderForm,
  teamOne,
  teamTwo,
  battle
} from './render-battlePlan.js'

import {
  getAgents
} from './gallery.js'

import {
  renderAgents
} from './renderGallery.js'

export default async function galleryPage(agentDiv) {
  const agentListEl = document.getElementById('agent-list');
  agentDiv.append(agentListEl);




  // Fetch the agents!
  const agents = await getAgents();
  console.log(agents);
  // render out the agents
  // renderAgentList
  renderAgents(agentListEl, agents)

}

export async function formResult(team1) {
  const formDiv = document.getElementById("your-team");
  formDiv.append(team1);
}

export async function battlePage(teamSection) {
  const formBattle = document.createElement('form')
  formBattle.id = 'battle-form'
  teamSection.append(formBattle)

  teamOne(document.querySelector('#your-team'));

  const agents = await getAgents();
  console.log(agents)

  renderForm(formBattle, agents)


  formBattle.addEventListener('submit', async (e) => {
    e.preventDefault();
    // const container = document.querySelector('#your-team')

    const form = e.target
    const formValues = Object.fromEntries(new FormData(form))

    document.querySelector('#defenders').textContent = 'Defending'

    const span = document.getElementById("results-agent")
    const span2 = document.getElementById("results-agent2")
    const span3 = document.getElementById("results-agent3")
    const span4 = document.getElementById("results-agent4")
    const span5 = document.getElementById("results-agent5")

    span.textContent = formValues['agents-1']
    span2.textContent = formValues['agents-2']
    span3.textContent = formValues['agents-3']
    span4.textContent = formValues['agents-4']
    span5.textContent = formValues['agents-5']

    form.reset();

  })
  document.getElementById('random-button').addEventListener('click', async () => {

    const selectElements = formBattle.querySelectorAll('option');
    const selectedAgents = [];

    selectElements.forEach(select => {
      if (select.value) {
        selectedAgents.push(select.value);
      }
    });

    const randomAgents = getRandomAgentsFromSelection(selectedAgents, 5);
    console.log(randomAgents)

    // Ensure the enemy team section is cleared before populating it
    const enemyTeamSection = document.querySelector('#enemy-team');
    enemyTeamSection.innerHTML = '';

    // Create and append result spans for the enemy team
    teamTwo(enemyTeamSection);
    document.getElementById('attackers').textContent = 'Attacking'

    document.getElementById('results-agent-enemy').textContent = randomAgents[0];
    document.getElementById('results-agent2-enemy').textContent = randomAgents[1];
    document.getElementById('results-agent3-enemy').textContent = randomAgents[2];
    document.getElementById('results-agent4-enemy').textContent = randomAgents[3];
    document.getElementById('results-agent5-enemy').textContent = randomAgents[4];
  });
}

const getRandomAgentsFromSelection = (agents, count) => {
  const shuffled = agents.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function battleResults(battleSec) {
  const fight = document.getElementById('fight');
  fight.addEventListener('click', () => {

    const result = battle();

    const winnerResult = document.getElementById('WINNER-result')
    winnerResult.textContent = result
  });
}

// export const handleSubmit = (e) => {
//   e.preventDefault();
//   // const container = document.querySelector('#your-team')

//   const form = e.target
//   const formValues = Object.fromEntries(new FormData(form))

//   const span = document.getElementById("results-agent")
//   const span2 = document.getElementById("results-agent2")
//   const span3 = document.getElementById("results-agent3")
//   const span4 = document.getElementById("results-agent4")
//   const span5 = document.getElementById("results-agent5")

//   span.textContent = formValues.agent
//   span2.textContent = formValues.agent
//   span3.textContent = formValues.agent
//   span4.textContent = formValues.agent
//   span5.textContent = formValues.agent

//   form.reset();
// }

// document.querySelector('#your-team').addEventListener('submit')