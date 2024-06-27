export const renderAgents = (agentListEl, agents) => {
  agentListEl.innerHTML = '';

  agents.forEach((agent) => {
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const agentRole = document.createElement('h2');;
    const agentImg = document.createElement('img');
    const title = document.createElement('h2')
    const ulAbilities = document.createElement('ul');
    const abilityDiv = document.createElement('div');

    h1.textContent = agent.name;
    title.id = 'intro';
    title.textContent = 'Abilities!';
    agentRole.textContent = `Role: ${agent.role}!`
    agentImg.id = `${agent.name}`
    agentImg.src = agent.pictureUrl;

    agent.abilities.forEach((ability) => {
      const liAbility = document.createElement('li');
      const pAbilityName = document.createElement('p');
      const pAbilityDescription = document.createElement('p');

      pAbilityName.textContent = ability.abilityName;
      pAbilityDescription.textContent = ability.description;

      liAbility.append(pAbilityName, pAbilityDescription);
      abilityDiv.append(liAbility);
      ulAbilities.append(abilityDiv)
    });

    // agentAbility1.textContent = agent.abilities[0].description

    li.append(h1, agentRole, agentImg, title, ulAbilities,)
    agentListEl.append(li)
  })
}




