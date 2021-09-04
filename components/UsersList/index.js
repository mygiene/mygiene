import React, { useEffect, useState } from "react";

import UserWrapper from "./style.users";
import Link from "next/link";
import { firestore } from "../../firebase/utils";

const URL = process.env.NEXT_PUBLIC_URL;

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = firestore
      .collection("users")
      .where("authRoles", "==", ["user"]);
    const data = await response.get();
    const allUser = [];
    data.docs.forEach((item) => {
      allUser.push({ ...item.data(), id: item.id });
    });
    setUsers(allUser.filter(Boolean));
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <UserWrapper>
        <div className="users">
          <span className="heading">USERS LIST</span>
          <div className="table-outer">
            <table class="container">
              <thead>
                <tr>
                  <th>
                    <h1>S.No.</h1>
                  </th>
                  <th>
                    <h1>User Name</h1>
                  </th>
                  <th>
                    <h1>Email Id</h1>
                  </th>
                  <th>
                    <h1>Created At</h1>
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 &&
                  users.map((item, index) => (
                    <Link href={`/admin/user-list/${item?.id}`}>
                      <a>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item?.displayName || "User not exists"}</td>
                          <td>{item?.email}</td>
                          <td>
                            {new Date(
                              item.createdAt.seconds * 1000
                            ).toLocaleString("en-US", {
                              timeZone: "Australia/Sydney",
                            })}
                          </td>
                        </tr>
                      </a>
                    </Link>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </UserWrapper>
    </>
  );
};

export default UsersList;
