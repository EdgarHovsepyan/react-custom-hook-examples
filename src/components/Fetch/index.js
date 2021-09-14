import { useFetch } from "../../hooks/useFetch";

const URL = "https://hn.algolia.com/api/v1/search?query=react";

const Fetch = () => {
  const { data, error, loading } = useFetch(URL);

  if (loading) return "Loading ...";
  if (error) return "Somothing went wrong!";

  return (
    <ul>
      {data?.hits?.map((item, i) => (
        <li key={item.objectID}>
          {i + 1}. <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Fetch;
