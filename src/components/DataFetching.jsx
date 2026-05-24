import { useEffect, useState } from "react";

const DataFetching = () => {
  const BASE_URL = "https://api.github.com/users";
  const [users, setUsers] = useState([]);

  const fetchUsersData = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setUsers(data);
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
