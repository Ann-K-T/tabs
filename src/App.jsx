import { useEffect, useState } from 'react';
import JobInfo from './components/JobInfo';
import BtnContainer from './components/BtnContainer';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  // HOOKS ==> useState
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  //END OF HOOKS ==> useState

  // FUNCTIONS
  const fetchJobs = async () => {
    const response = await fetch(url);
    const fetchedJobs = await response.json();
    setJobs(fetchedJobs);
    setIsLoading(false);
  };
  // END OF FUNCTIONS

  // HOOKS ==> useEffect
  useEffect(() => {
    fetchJobs();
  }, []);
  // END OF HOOKS ==> useEffect

  // LOADING
  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  // END OF LOADING

  // RETURN JSX
  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
