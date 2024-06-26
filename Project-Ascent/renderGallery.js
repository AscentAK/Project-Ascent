import { getAgents } from "./gallery";

export const renderAgents = (agentListEl, agents) => {
  agentListEl.innerHTML = '';

  agents.forEach((agent) => {
    const li = document.createElement('li');
    const h2 = document.createElement('h2');

    const agentImg = document.createElement('img');
    // const agentAbility1 = document.createElement('p');
    // const agent1Des = document.createElement('p');

    // const agentAbility2 = document.createElement('p');
    // const agent2Des = document.createElement('p');

    // const agentAbility3 = document.createElement('p');
    // const agent3Des = document.createElement('p');

    // const agentAbility4 = document.createElement('p');
    // const agent4Des = document.createElement('p');


    h2.textContent = agent.Name;

    agentImg.src = agent.PictureUrl;

    li.append(h2, agentImg)
    agentListEl.append(li)
  })
}




