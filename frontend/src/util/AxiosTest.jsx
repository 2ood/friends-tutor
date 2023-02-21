import React, {useState, useEffect} from "react";
import ModularRequest from "./ModularRequest";


function AxiosTest(){
  const [isLoaded, setLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(
    ()=>{
      let m1 = new ModularRequest({
        "path" : "posts",
        "method" : "get",
        "headers" : {}
      });
    
      m1.send().then((dat)=>{
      setLoaded(true);
      setData(dat);
    }
      );},[]
  );
  
  if(!isLoaded) return <h1>Loading..</h1>;
  return (
      <div>
        <ul>{
          data.map((
            json=>(<li key={json.id}>{json.title}</li>)
          ))
        }</ul>
      </div>
    );
  
}

export default AxiosTest;