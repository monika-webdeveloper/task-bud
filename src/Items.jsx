//import { useQuery } from "@tanstack/react-query";
import { useFetchTask } from "./ReactQueryCustomHooks";
import SingleItem from "./SingleItem";
//import customFetch from "./utils";

const Items = () => {
  const { isError, isLoading, data } = useFetchTask();
  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  }
  if (isError) {
    return <p style={{ marginTop: "1rem" }}>{error.response.data}</p>;
  }

  return (
    <div className='items'>
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
