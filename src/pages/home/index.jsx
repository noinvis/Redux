// src/pages/Home.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../redux/features/CreateUserSlice";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const users = useSelector((state) => state.createUser.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Users</h1>
          <button
            onClick={() => navigate("/create")}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Create User
          </button>
        </div>

        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Age</th>
                <th className="p-2 border">Profession</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="text-center">
                  <td className="border p-2">{user.id}</td>
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.age}</td>
                  <td className="border p-2">{user.profession}</td>
                  <td className="border p-2 space-x-2">
                    <Link
                      to={`/edit/${user.id}`}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => dispatch(deleteUser({ id: user.id }))}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default Home;
