/*
forms layout

Team name

5 selections:

*agent

*agent

*agent

*agent

*agent

submit <button>

random <button>


--> key: placeholder name --> (*)
*/
const createSelectButton = () => {
  const select = document.createElement('select').setAttribute('id', 'agent')
  return select
}

const createOptions = (select, agents) => {

  for (let i = 0; i < agents.length; i++) {
    const option = document.createElement('option')
    option.setAttribute('value', `${agents[i].name}`)
    option.textContent = agents[i].name
    select.append(option)
  }

}

export const renderForm = (agents) => {

  const battle = document.querySelector('#battle-form')

  for (let i = 0; i < 5; i++) {
    const select = createSelectButton();
    createOptions(select, agents)
    battle.append(select)
  }

  const button = document.createElement('button')
  const random = document.createElement('button')

  button.setAttribute('type', 'submit')
  random.setAttribute('type', 'submit')

  battle.append(button, random)
};

export const renderFormEnemy = (agents) => {

  const battle = document.querySelector('#battle-form-enemy')

  for (let i = 0; i < 5; i++) {
    const select = createSelectButton();
    createOptions(select, agents)
    battle.append(select)
  }

  const button = document.createElement('button')
  const random = document.createElement('button')

  button.setAttribute('type', 'submit')
  random.setAttribute('type', 'submit')

  battle.append(button, random)

};

export const teamOne = () => {

  const container = document.querySelector('#your-team')

  const h2 = document.createElement('h2')
  h2.id = 'results-heading'
  h2.textContent = 'Defenders'

  const p = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const p4 = document.createElement('p')
  const p5 = document.createElement('p')

  const span = document.createElement('span')
  span.id = 'results-agent'

  const span2 = document.createElement('span')
  span.id = 'results-agent2'

  const span3 = document.createElement('span')
  span.id = 'results-agent3'

  const span4 = document.createElement('span')
  span.id = 'results-agent4'

  const span5 = document.createElement('span')
  span.id = 'results-agent5'


  p.appendChild(span)
  p2.appendChild(span2)
  p3.appendChild(span3)
  p4.appendChild(span4)
  p5.appendChild(span5)


  container.append(h2, p, p2, p3, p4, p5)
};

export const teamTwo = () => {

  const container = document.querySelector('#enemy-team')

  const h2 = document.createElement('h2')
  h2.id = 'results-heading-enemy'
  h2.textContent = 'Attackers'

  const p = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const p4 = document.createElement('p')
  const p5 = document.createElement('p')

  const span = document.createElement('span')
  span.id = 'results-agent'

  const span2 = document.createElement('span')
  span.id = 'results-agent2'

  const span3 = document.createElement('span')
  span.id = 'results-agent3'

  const span4 = document.createElement('span')
  span.id = 'results-agent4'

  const span5 = document.createElement('span')
  span.id = 'results-agent5'


  p.appendChild(span)
  p2.appendChild(span2)
  p3.appendChild(span3)
  p4.appendChild(span4)
  p5.appendChild(span5)


  container.append(h2, p, p2, p3, p4, p5)
};

