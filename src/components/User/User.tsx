import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { UserResponse } from "../../intarfaces/main";
import NavigationButton from "../Button/NavigationButton";
import './User.css';

const User: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<null | UserResponse>(null);

  const getUser = useCallback(async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const data: UserResponse = await response.json();
    setUser(data);
  }, [id]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (!user) {
    return <div>Loading......</div>;
  }
  return (
    <div>
      <div className="employee">
        <h2 className="title">Информация о сотруднике</h2>
        <div className="employee-list">
          <p>Name:</p>
          <p className="employee_text">{user.name}</p>
        </div>
        <div className="employee-list">
          <p>Username: </p>
          <p className="employee_text">{user.username}</p>
        </div>
        <div className="employee-list">
          <p>Email: </p>
          <p className="employee_text">{user.email}</p>
        </div>
        <div className="employee-list">
          <p>Address: </p>
          <p className="employee_text">
            {user.address.street}, {user.address.city}
          </p>
        </div>
        <div className="employee-list">
          <p>Zipcode: </p>
          <p className="employee_text">
            {user.address.suite}, {user.address.zipcode}
          </p>
        </div>
        <div className="employee-list">
          <p>Geo: </p>
          <p className="employee_text">
            {user.address.geo.lat},{user.address.geo.lng}
          </p>
        </div>
        <div className="employee-list">
          <p>Phone: </p>
          <p className="employee_text">{user.phone}</p>
        </div>
        <div className="employee-list">
          <p>Website: </p>
          <p className="employee_text">{user.website}</p>
        </div>
        <div className="employee-list">
          <p>Company: </p>
          <p className="employee_text">{user.company.name}</p>
        </div>
        <div className="employee-list">
          <p>Catch Phrase: </p>
          <p className="employee_text">{user.company.catchPhrase}</p>
        </div>
        <div className="employee-list">
          <p>BS: </p>
          <p className="employee_text">{user.company.bs}</p>
        </div>
        <div className="button_container">
          <NavigationButton  to="/">Назад</NavigationButton>
        </div>
      </div>
    </div>
  );
};
export default User;
