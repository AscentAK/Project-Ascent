import {
  renderForm,
  teamOne,
  teamTwo
} from './render-battlePlan'

import {
  getAgents
} from './gallery'

import {
  renderAgents
} from './renderGallery'

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

  teamOne(teamSection);

  const agents = await getAgents();
  console.log(agents)

  renderForm(formBattle, agents)


  formBattle.addEventListener('submit', async (e) => {
    e.preventDefault();
    // const container = document.querySelector('#your-team')

    const form = e.target
    const formValues = Object.fromEntries(new FormData(form))

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