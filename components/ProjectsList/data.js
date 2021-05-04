
import { nanoid } from 'nanoid'

import rawItems from './dataRaw'

const pullUnique = (to = [], from = []) => {
  from.forEach(e => { if ( to.indexOf(e) === -1 ) to.push(e) })
}


const initItem = (item, employer = false) => {
  item = {
    id: nanoid(),
    title: '',
    brief: [],
    deets: false, // String or JSX
    langs: [],
    tools: [],
    ...item,
  }
  if (item.type === 'employer') {
    item = {
      projects: [],
      ...item,
    }
    item.projects = item.projects.map(project => initItem(project, item));
    employers.push(item);
  } else {
    item = {
      type: 'project',
      employer,
      ...item,
    }
    projects.push(item);
  }
  
  if (employer) {
    pullUnique(employer.brief, item.brief);
    pullUnique(employer.tools, item.tools);
    pullUnique(employer.langs, item.langs);
  }

  pullUnique(brief, item.brief);
  pullUnique(tools, item.tools);
  pullUnique(langs, item.langs);

  return item
}


const employers = [],
      projects = [],
      brief = [],
      langs = [],
      tools = [],

      items = rawItems.map(item => initItem(item));

// console.log(items, tools, langs, brief);

export { items, projects, employers }
