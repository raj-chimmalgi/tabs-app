const BtnContainer = ({ data, handleButtonClick, currentItem }) => {
  return (
    <section className="btn-container">
      {data.map((item, index) => (
        <button
          className="btn"
          key={item.id}
          onClick={() => handleButtonClick(index)}
        >
          {item.company}
        </button>
      ))}
    </section>
  );
};

export default BtnContainer;
