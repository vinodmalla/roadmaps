const ProjectIdeas = ({ title, projects }) => (
  <div className="mt-6">
    <h2 className="text-2xl font-bold">{title}</h2>
    <ul className="list-disc list-inside text-gray-800 space-y-1 mt-4">
      {projects.map((project, index) => (
        <li key={index}>
          <strong>{project.title}:</strong> {project.description}
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectIdeas;