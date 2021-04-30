
import { nanoid } from 'nanoid'


// Parsing function
const parseItems = (rawItems, employer = false) => { // mutates items array to add verbossity, returns projects and employers arrays
  console.log('parse items', { rawItems: JSON.parse(JSON.stringify(items)) });
  
  const projectsReducer = (projects, item) => { // mutates items array, provisions employers array, accumulates and returns projects array
    item.id = nanoid();

    if (item.type === 'employer') {
      employer = item;
      item.projects = (item.projects || []).reduce(projectsReducer, []);
      employer = false;
      employers.push(item);
      return [...projects, ...item.projects]
    
    } else {
      item.type = 'project';
      item.employer = employer;
      return [...projects, item];
    }
  }

  const employers = [],
        projects = rawItems.reduce(projectsReducer, []);
  
  console.log('parsed items', { rawItems, projects, employers });
  return [employers, projects];
}


// Shortcodes
const l = { // languages shortcodes
  js: 'Javascript',
  ht: 'HTML',
  cs: 'CSS',
  sc: 'SCSS',
  ph: 'PHP',
  tw: 'TWIG',
},
t = { // tools shortcodes
  re: 'React',
  nx: 'Next.js',
  no: 'Node.js',
  wp: 'WordPress',
  we: 'Webpack',
},
b = { // brief detail shortcodes
  ws: 'website build',
  wa: 'web application build',
};


// Data
const items = [ // written in shorthand, gets verbose during parse step
  {
    title: 'Todeps',
    deets: <>
            <p>a detail</p>
            <p>\annother detail</p>
          </>,
    brief: [b.wa],
    langs: [l.js, l.ht, l.cs],
    tools: [t.nx, t.rea],
  },

  {
    type: 'employer',
    title: 'Concert, a Buck company',
    projects: [
      {
        title: 'HP',
        deets: 'hp deets'
      },
    ],
  },

  {
    type: 'employer',
    title: 'Rhombus Studio',
    projects: [
      {
        title: 'Mages group website',
        deets: 'Stuff about Mages',
      },
      {
        title: 'Temple Homes Property LTD website',
        deets: 'Info concerning TH',
      },
    ],
  },

  {
    title: 'Impact Mentoring scheduling app',
    deets: 'some details',
  },
  {
    title: 'Wild Source Apothecary website',
    deets: 'some details',
  },

];


// Innit
const [ employers, projects ] = parseItems(items);

export { items, projects, employers }
