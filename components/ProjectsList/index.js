
import { useState } from 'react'
import { items, projects } from './data'

const defaultSort = 'chronology';


const ProjectsList = ({  }) => {

  const [view, setView] = useState({ employers: true, sort: defaultSort, });
  
  return (<>
    <button onClick={() => setView({ ...view, employers: !view.employers })}>{ view.employers ? 'Hide' : 'Show'} employers</button>
    <button onClick={() => setView({ ...view, sort: view.sort === defaultSort ? 'title' : defaultSort })}>Sorted by { view.sort }</button>
    
    <List items={ view.employers ? items : projects } {...{ view }}/>

    <style jsx>{``}</style>
  </>)
}




const List = ({ items = [], level = 0, view }) => {

  if (!items.length) return null
  return (
  
    <ul className={`list level--${ level }`}>
      
      { items.map((item, key) => (
        <li {...{ key }} className={`item level--${ level }`}>

          { item.type === 'project' && <Project {...{ ...item }}/> }
          { item.type === 'employer' && <Employer {...{ ...item }}><List items={ item.projects } level={ level + 1} {...{ view }}/></Employer> }
        </li>
      ))}

      <style jsx>{``}</style>
    </ul>
  )
}




const Project = ({ title = 'title', deets }) => {
  return (<>
    <h2>Project: { title }</h2>
    <Details {...{ deets }}/>
  </>)
}

const Employer = ({ title = 'title', deets, children }) => {
  return (<>
    <h2>Employer: { title }</h2>
    <Details {...{ deets }}/>
    { children }
  </>)
}

const Details = ({ deets = false }) => {
  if (!deets) return null;
  return typeof deets === 'string' ? <p>{ deets }</p> : deets;
}

export default ProjectsList