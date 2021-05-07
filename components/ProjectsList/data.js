
import { nanoid } from 'nanoid'

import rawItems, { brief, langs, tools } from './dataRaw'


const pushUnique = (to = [], from = []) => {
  from.forEach(e => { if ( to.indexOf(e) === -1 ) to.push(e) })
}
// const copyOrder = (to, from) => {
//   return to.sort((el1, el2) => from.indexOf(el1) > from.indexOf(el2))
// }


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
    pushUnique(employer.brief, item.brief);
    pushUnique(employer.tools, item.tools);
    pushUnique(employer.langs, item.langs);
  }

  sortTags(item.brief);
  sortTags(item.langs);
  sortTags(item.tools);
  item.tags = [...item.brief, ...item.langs, ...item.tools];
  item.tags.forEach(t => t.used = true)

  return item
}

const initTag = (tag = {}, group = 'Other') => {
  tag.group = group;
  tag.title = tag.t;
  tag.id = nanoid();
  tag.used = false;
  return tag
}

const sortTags = (toSort) => {
  const order = tags.map(t => t.id);
  toSort.sort((el1, el2) => order.indexOf(el1.id) - order.indexOf(el2.id))
}


const tags = [
  ...brief.map(i => initTag(i, 'Brief')),
  ...langs.map(i => initTag(i, 'Languages')),
  ...tools.map(i => initTag(i, 'Tools')),
];


const employers = [],
      projects = [],
      items = rawItems.map(item => initItem(item));


export { items, projects, employers, brief, langs, tools, tags }
