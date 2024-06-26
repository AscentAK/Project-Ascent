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
const createSelectButton = (index) => {
  const select = document.createElement('select')
  select.setAttribute('name', `agents-${index}`)
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

export const renderForm = (teamSection, agents) => {

  const h2 = document.createElement('h2');
  h2.id = 'formHeading'
  h2.textContent = "Form your team!"

  teamSection.append(h2)



  for (let i = 0; i < 5; i++) {
    const select = createSelectButton(i + 1);
    createOptions(select, agents)
    teamSection.append(select)
  }

  const button = document.createElement('button')


  button.setAttribute('type', 'submit')


  button.textContent = 'Button'


  teamSection.append(button)
};


export const teamOne = (teamSelection) => {

  const h2 = document.createElement('h2')
  h2.id = 'defenders'

  const p = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const p4 = document.createElement('p')
  const p5 = document.createElement('p')

  const span = document.createElement('span')
  span.id = 'results-agent'

  const span2 = document.createElement('span')
  span2.id = 'results-agent2'

  const span3 = document.createElement('span')
  span3.id = 'results-agent3'

  const span4 = document.createElement('span')
  span4.id = 'results-agent4'

  const span5 = document.createElement('span')
  span5.id = 'results-agent5'


  p.appendChild(span)
  p2.appendChild(span2)
  p3.appendChild(span3)
  p4.appendChild(span4)
  p5.appendChild(span5)


  teamSelection.append(h2, p, p2, p3, p4, p5)
};

export const teamTwo = (teamSelection) => {

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


  teamSelection.append(h2, p, p2, p3, p4, p5)
};

export const battle = () => {
  const arr = ['Defenders', 'Attackers'];
  const randomElement = arr[Math.floor(Math.random() * arr.length)];

  return randomElement
}