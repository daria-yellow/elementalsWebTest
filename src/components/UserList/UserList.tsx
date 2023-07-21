import React from "react";
import clsx from "clsx";
import useLazyLoad from "../../helpers/useLazyLoad";
import { User } from "../../types/types";
import UserComponent from "../User/User";
import "./UserList.css";

interface UserListComponentProps {
  users: User[];
  elemPerPage: number;
}

const UserListComponent: React.FC<UserListComponentProps> = ({
  users,
  elemPerPage,
}: UserListComponentProps) => {
  const [selectedItem, setSelectedItem] = React.useState<number>(0);
  const [load, setLoad] = React.useState(true);
  const triggerRef = React.useRef(null);

  const onGrabData = (currentPage: number) => {
    if (currentPage * elemPerPage > users.length) {
      setLoad(false);
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        const data = users.slice(
          (currentPage - 1) * elemPerPage,
          elemPerPage * currentPage
        );
        resolve(data);
      }, 1000);
    });
  };
  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });

  return (
    <React.Fragment>
      <div className="user-list">
        {data.map((item: any) => {
          return (
            <UserComponent
              user={item}
              id={users.indexOf(item) + 1}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              key={users.indexOf(item)}
            />
          );
        })}
      </div>

      {load && (
        <div ref={triggerRef} className={clsx("loading", { visible: loading })}>
          Loading users...
        </div>
      )}
    </React.Fragment>
  );
};

export default UserListComponent;
