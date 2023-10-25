import JobDuties from "./JobDuties.jsx";

const JobInfo = (props) => {
  const { company, dates, title, duties } = props;
  return (
    <section className="jobs-center">
      <h1>{title}</h1>
      <div className="job-company">{company}</div>
      <p className="job-date">{dates}</p>
      <JobDuties duties={duties} />
    </section>
  );
};

export default JobInfo;
