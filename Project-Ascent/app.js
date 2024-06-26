import {
  renderForm,
  renderFormEnemy,
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