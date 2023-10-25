import { useState, useEffect } from "react";
import JobInfo from "./JobInfo.jsx";
import BtnContainer from "./BtnContainer.jsx";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleButtonClick = (index) => {
    setCurrentItem(data[index]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const resData = await res.json();
        setData(resData);
        setCurrentItem(() => resData[0]);
        setIsLoading(false);
      } catch (e) {
        console.log(`Error: ${e.message}`);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      {isLoading && (
        <section>
          <h1>Loading....</h1>
        </section>
      )}
      <section>
        {data && (
          <BtnContainer
            data={data}
            currentItem={currentItem}
            handleButtonClick={handleButtonClick}
          />
        )}
        {data && <JobInfo {...currentItem} />}
      </section>
    </main>
  );
};
export default App;
