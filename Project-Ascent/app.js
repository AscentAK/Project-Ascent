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

async function galleryPage(agentDiv) {
  const agentListEl = document.getElementById('agent-list');
  agentDiv.append(agentListEl);




  // Fetch the agents!
  const agents = await getAgents();
  console.log(agents);
  // render out the agents
  // renderAgentList
  renderAgents(agentListEl, agents)

}

async function formResult(team1) {
  const formDiv = document.getElementById("your-team");
  formDiv.append(team1);
}

async function battlePage(teamSection) {
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

    const displayAgentInfo = async (spanId, agentName) => {
      const span = document.getElementById(spanId);
      const agent = agents.find(a => a.name === agentName);
      if (agent) {

        span.innerHTML = '';

        const nameSpan = document.createElement('span');
        nameSpan.textContent = agent.name;
        nameSpan.style.marginRight = '10px';
        span.appendChild(nameSpan);

        const icon = document.createElement('img');
        icon.src = agent.icon;
        icon.alt = `${agent.name} icon`;
        icon.style.width = '50px';
        icon.style.height = 'auto';
        span.appendChild(icon);
      }
    };


    await displayAgentInfo('results-agent', formValues['agents-1']);
    await displayAgentInfo('results-agent2', formValues['agents-2']);
    await displayAgentInfo('results-agent3', formValues['agents-3']);
    await displayAgentInfo('results-agent4', formValues['agents-4']);
    await displayAgentInfo('results-agent5', formValues['agents-5']);

    form.reset();
    // const span = document.getElementById("results-agent")
    // const span2 = document.getElementById("results-agent2")
    // const span3 = document.getElementById("results-agent3")
    // const span4 = document.getElementById("results-agent4")
    // const span5 = document.getElementById("results-agent5")

    // span.textContent = formValues['agents-1']
    // span2.textContent = formValues['agents-2']
    // span3.textContent = formValues['agents-3']
    // span4.textContent = formValues['agents-4']
    // span5.textContent = formValues['agents-5']

    // form.reset();

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


    const enemyTeamSection = document.querySelector('#enemy-team');
    enemyTeamSection.innerHTML = '';


    teamTwo(enemyTeamSection);
    document.getElementById('attackers').textContent = 'Attacking'

    const displayAgentInfo = async (spanId, agentName) => {
      const span = document.getElementById(spanId);
      const agent = agents.find(a => a.name === agentName);
      if (agent) {

        span.innerHTML = '';

        const nameSpan = document.createElement('span');
        nameSpan.textContent = agent.name;
        nameSpan.style.marginRight = '10px';
        span.appendChild(nameSpan);

        const icon = document.createElement('img');
        icon.src = agent.icon;
        icon.alt = `${agent.name} icon`;
        icon.style.width = '50px';
        icon.style.height = 'auto';
        span.appendChild(icon);
      }
    };


    await displayAgentInfo('results-agent-enemy', randomAgents[0]);
    await displayAgentInfo('results-agent2-enemy', randomAgents[1]);
    await displayAgentInfo('results-agent3-enemy', randomAgents[2]);
    await displayAgentInfo('results-agent4-enemy', randomAgents[3]);
    await displayAgentInfo('results-agent5-enemy', randomAgents[4]);

    // document.getElementById('results-agent-enemy').textContent = randomAgents[0];
    // document.getElementById('results-agent2-enemy').textContent = randomAgents[1];
    // document.getElementById('results-agent3-enemy').textContent = randomAgents[2];
    // document.getElementById('results-agent4-enemy').textContent = randomAgents[3];
    // document.getElementById('results-agent5-enemy').textContent = randomAgents[4];
  });
}

const getRandomAgentsFromSelection = (agents, count) => {
  const shuffled = agents.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function battleResults(battleSec) {
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

export { galleryPage, formResult, battlePage, battleResults }