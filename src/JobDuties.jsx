import { IoChevronForwardOutline } from "react-icons/io5";
import { v4 as uuid } from "uuid";

const JobDuties = ({ duties }) => {
  return duties.map((duty) => (
    <div key={uuid()} className="job-desc">
      <IoChevronForwardOutline />
      <p>{duty}</p>
    </div>
  ));
};

export default JobDuties;
