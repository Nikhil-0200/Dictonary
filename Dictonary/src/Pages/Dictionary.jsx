import { useEffect, useState } from "react";
import Results from "../Components/Results";
import Pagination from "../Components/Pagination";

const Dictionary = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [totalPages, setTotalPages] = useState(0)
  const [search, setSearch] = useState({
    word: "Dictonary"
  });

  const url =
    `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${search.word}`
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bba5e88c22msh0f99678a618b83ep1abc21jsn3b792ac36709",
      "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
    },
  };

  async function fetchData() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setData(result.list);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [search.word]);


  function handleChange(event){
    const newData = {
      ...search,
      [event.target.name]: event.target.value
    }
    setSearch(newData)
  }


  const totalNoPages = 4;

  const LastIndex = count * totalNoPages;
  const FirstIndex = LastIndex - totalNoPages;


  const DisplayData = data.slice(FirstIndex, LastIndex)


  return (
    <div>
      
      <label htmlFor="">Search Word Here: </label>
      <input type="text" name="word" placeholder="Search Here" onChange={handleChange} value={search.word}/>

      {DisplayData.map((ele, index) => (
        <Results {...ele} key={index}/>
      ))}

      <Pagination
      currentPage={count}
      totalPages={Math.ceil(data.length /totalNoPages)}
      setCurrentPage={setCount}
      />
    </div>
  );
};

export default Dictionary;
