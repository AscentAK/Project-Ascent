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

      // create an array, to be just displayName and description
      // add the array into the abilities

      return {
        name: agent.displayName,
        pictureUrl: `https://media.valorant-api.com/agents/${agent.uuid}/fullportrait.png`,
        role: agent.role ? agent.role.displayName : null,
        abilities: abilities
      };
    });

  } catch (error) {
    console.warn(error.message);
    return null;
  }
}

getAgents()