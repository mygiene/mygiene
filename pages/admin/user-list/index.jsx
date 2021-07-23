import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { typeOf } from "react-is";
import UserWrapper from "../styles/style.users";
import Link from "next/link";
import { AuthContext } from "../../../components/auth/auth";
import { firestore } from "../../../firebase/utils";
const URL = process.env.NEXT_PUBLIC_URL;

const Pages = () => {
  const {
    authState: { isAdmin },
  } = useContext(AuthContext);

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
    // console.log(data.docs.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  if (isAdmin)
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
                      <h1>Display Name</h1>
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
                  {/* {console.log(users)} */}
                  {users.length > 0 &&
                    users.map((item) => (
                      <Link href={`/admin/user-list/${item?.id}`}>
                        <a>
                          <tr>
                            <td>{item?.displayName}</td>
                            <td>{item?.displayName}</td>
                            <td>{item?.email}</td>
                            <td>{item?.email}</td>
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
  else window.location = `${URL}`;
};

export default Pages;
