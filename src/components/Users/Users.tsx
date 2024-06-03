import { useEffect, useState } from "react";
import { UserResponse } from "../../intarfaces/main";
import NavigationButton from "../Button/NavigationButton";
import "./Users.css";

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: UserResponse[] = await response.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="employees">
      <div className="title">Все пользователи</div>
      <div className="container">
        {users.map((user) => (
          <div className="list" key={user.id}>
            <NavigationButton to={`/user/${user.id}`} className="NoBtn">
              {user.name}
            </NavigationButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
