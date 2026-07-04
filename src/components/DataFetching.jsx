import { useEffect, useState } from "react";
import axios from "axios"
import { fetchUsers } from "../api/api";
const DataFetching = () => {
  const BASE_URL = "https://api.github.com/users";
  const [users, setUsers] = useState([]);

  const fetchUsersData = async () => {
    // const response = await fetch(BASE_URL);
    // const data = await response.json();
    // setUsers(data);
    const usersData = await fetchUsers();
    setUsers(usersData);


    // const response = await axios.get(BASE_URL);
    // console.log("naya data",response.data[0].login)

  };
  console.log(users);
  useEffect(() => {
    (async ()=>{
        await fetchUsersData();
    })()
  }, []);

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 gap-3">
      {users?.map((user, index) => (
        <div key={index}>
          <img src={user.avatar_url} alt="" />
          <h2>{user.login}</h2>
        </div>
      ))}
    </div>
  );
};

export default DataFetching;
