const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map(({ company, id }, index) => {
        return (
          <button
            key={id}
            className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => setCurrentItem(index)}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
