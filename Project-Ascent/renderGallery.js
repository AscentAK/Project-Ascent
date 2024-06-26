export const renderAgents = (agentListEl, agents) => {
  agentListEl.innerHTML = '';

  agents.forEach((agent) => {
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const agentRole = document.createElement('h2');;
    const agentImg = document.createElement('img');
    const ulAbilities = document.createElement('ul');

    h1.textContent = agent.name;
    agentRole.textContent = `Role: ${agent.role}!`
    agentImg.src = agent.pictureUrl;

    agent.abilities.forEach((ability) => {
      const liAbility = document.createElement('li');
      const pAbilityName = document.createElement('p');
      const pAbilityDescription = document.createElement('p');

      pAbilityName.textContent = ability.abilityName;
      pAbilityDescription.textContent = ability.description;

      liAbility.append(pAbilityName, pAbilityDescription);
      ulAbilities.append(liAbility);
    });

    // agentAbility1.textContent = agent.abilities[0].description

    li.append(h1, agentRole, agentImg, ulAbilities,)
    agentListEl.append(li)
  })
}




