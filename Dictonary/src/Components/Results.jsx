const Results = ({ index, definition, word, example }) => {
  return (
    <div
      key={index}
      style={{ border: "2px solid black", margin: "10px", padding: "10px" }}
    >
      <p>Word: {word}</p>
      <p>Definition: {definition}</p>
      <p>Example: {example}</p>
    </div>
  );
};

export default Results;
