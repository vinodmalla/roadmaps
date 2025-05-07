

const Section = ({ title, description, listItems }) => (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-4 text-lg">{description}</p>
      {listItems && (
        <ul className="list-disc list-inside text-gray-800 space-y-1 mt-4">
          {listItems.map((item, index) => (
            <li key={index}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );


  export default Section;