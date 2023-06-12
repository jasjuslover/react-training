import { useCallback, useEffect, useState } from "react";

const useUsers = () => {
  const [rendering, setRendering] = useState(0);
  const [users, setUsers] = useState(["A", "B", "C"]);
  const [localUser, setLocalUser] = useState([]);

  const initLocalUsers = useCallback(() => {
    console.log("initLocalUser");
    return ["D", "E", "F", rendering];
  }, [rendering]);

  const deleteUser = useCallback((user) => {
    console.log(rendering);
    const newUsers = users.filter((currentUser) => currentUser !== user);
    setUsers(newUsers);
  }, []);

  useEffect(() => {
    const localUser = initLocalUsers();
    setLocalUser(localUser);
  }, [initLocalUsers]);
  //   useEffect(() => {
  //     setRendering(rendering + 1);
  //   });

  //   useEffect(() => {
  //     console.log({ rendering });
  //   }, [rendering]);

  return {
    users,
    deleteUser,
  };
};

export default useUsers;
