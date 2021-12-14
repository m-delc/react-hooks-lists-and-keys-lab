import React from "react";

// function ProjectItem({ name, about, technologies }) {
//   console.log(name)
//   return (
//     <div className="project-item">
//       <h3>{name}</h3>
//       <p>{about}</p>
//       <div className="technologies">
//         {technologies.map(technology =>  {
//           return(
//             <span key={technology}>{technology}</span>
//           )
//         })}
//       </div>
//     </div>
//   );
// }

// function ProjectList({ projects }) {
//   console.log(projects);

//   return (
//     <div id="projects">
//       <h2>My Projects</h2>
//       <div id="project-list">
//       {projects.map(project => {
//         return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>;
//         })}
//       </div>
//     </div>
//   );
// }

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map(technology => {
          return (
            <span key={technology}> {technology} </span>)
        })}
      </div>
    </div>
  );
}

export default ProjectItem;

