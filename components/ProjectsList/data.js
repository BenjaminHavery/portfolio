
import { nanoid } from 'nanoid'

import rawItems from './dataRaw'


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
  return item
}


const employers = [],
      projects = [],
      items = rawItems.map(item => initItem(item));

export { items, projects, employers }
