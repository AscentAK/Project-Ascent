export const getAgents = async () => {
  const url = `https://valorant-api.com/v1/agents`
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(new Error(`Failed to get Agents`))
      throw new Error(`Failed to get Agents`)
    }

    const isJSON = await response.json();
    const data = isJSON.data

    return data.map((agent) => {
      // Extracting ability names and descriptions
      const abilities = agent.abilities.map((ability) => ({
        abilityName: ability.displayName,
        description: ability.description
      }));

      const agents = {
        Name: agent.displayName,
        PictureUrl: `https://media.valorant-api.com/agents/${agent.uuid}/fullportrait.png`,
        Role: agent.role ? agent.role.displayName : null,
        Abilities: abilities
      };

      return agents
    });


  } catch (error) {
    console.warn(error.message);
    return null;
  }
}

getAgents()