import { useEffect, useState } from "react";

function FetchProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const jsonData = await res.json();
        setData(jsonData.products);
      } catch (e) {
        console.log("Error is:", e);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>FetchProducts</h2>
      {data.map((ele) => (
        <div key={ele.id}>
            <img src={ele.thumbnail} height= '100' width= '100'/>
          <h3>{ele.id}</h3>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default FetchProducts;