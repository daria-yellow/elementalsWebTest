import React from "react";
import { msToTime } from "../../helpers/MsToTime";
import { Helmet } from "../../images/Helmet";
import { User } from "../../types/types";
import "./User.css";

interface UserComponentProps {
  user: User;
  id: number;
  selectedItem: number;
  setSelectedItem: (id: number) => void;
}

const UserComponent: React.FC<UserComponentProps> = ({
  user,
  id,
  selectedItem,
  setSelectedItem,
}: UserComponentProps) => {
  return (
    <div
      className="user"
      onClick={() => setSelectedItem(selectedItem === id ? 0 : id)}
    >
      <div className={`user-id ${selectedItem === id && "user-id-selected"}`}>
        {id}
      </div>
      <div className={`helmet ${selectedItem === id && "helmet-selected"}`}>
        <Helmet fillcolor={user.color} width="50" heigth="50" />
      </div>
      <div className="user-info">
        <div className="user-name">{user.name}</div>
        <div className="user-time">
          <div>{msToTime(user.time)}</div>|<div>{user.speed} км/ч</div>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
