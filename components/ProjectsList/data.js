
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
  sq: 'SQL',
},
t = { // tools shortcodes
  re: 'React',
  nx: 'Next.js',
  no: 'Node.js',
  wp: 'WordPress',
  we: 'Webpack',
  cr: 'Craft CMS',
  gi: 'Git',
},
b = { // brief detail shortcodes
  ws: 'website',
  wa: 'web application',
  de: 'design (not my specialty!)',
  bu: 'build',
  up: 'updates/additions',
  ma: 'maintainence',
};


// Data
const items = [ // written in shorthand, gets verbose during parse step
  {
    title: 'Todeps',
    deets: <>
            <p>Todeps is an in-progress Trello/Jira-esqe productivity application built primarily for demonstration purposes. Its USP is the facility to conveniently tag tasks as depending on other tasks, from which a non-blocking order of opperations is inferred.</p>
            <p>I can provide a codebase tour on request for the purpose of asessing my programming style.</p>
          </>,
    link: 'todeps.com',
    brief: [b.wa, b.de, b.bu],
    langs: [l.js, l.ht, l.cs],
    tools: [t.nx, t.re, t.gi],
  },

  {
    type: 'employer',
    title: 'Concert, a Buck company',
    deets: <>
            <p>At Concert Consulting I was part of a team of three developers responsible for their entire digital portfolio, spanning more than 20 high profile corporate clients including RBS, BT, GE and several branches of UK local government. About 70% of my workload was creating and maintaining TWIG based pension scheme websites while the remaining 30% was building web-apps using VUE and React, in both cases meeting the ISO 27001 standard for data security attractive to the sector.</p>
            <p>I found web application work extremely rewarding because of the variety it offered, with projects at Concert encompassing everything from election portals and user surveys to personal pension visualisers and a bespoke video chatroom. Within the team I grew into the role of frontend web-app expert, leading research and development on these types of project, before eventually leaving the business to specialise further in that direction.</p>
          </>,
    projects: [
      {
        title: 'Concert, a Buck company',
        deets: "This website replaced the previous one when Concert Consulting was accquired in late 2020. For reasons of secrecy and a surprisingly sudden deal it had to be a very fast build; I recieved my first brief a week before the merger, and the design and content were't fully decided on until the day before. Needless to say this was a pretty hectic time, but luckily I code well with more pressure and less information than usual so everything went smoothly enough.",
        link: 'concertconsult.co.uk',
        brief: [b.ws, b.bu, b.ma],
        langs: [l.tw, l.ht, l.js, l.cs, l.sc],
        tools: [t.cr, t.we, t.gi],
      },
      {
        title: 'HP',
        deets: 'hp deets'
      },
    ],
  },

  {
    type: 'employer',
    title: 'Rhombus Studio',
    deets: 'At Rhombus etc etc...',
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
