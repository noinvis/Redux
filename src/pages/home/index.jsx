import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux/features/CreateUserSlice";

const Index = () => {
  const users = useSelector((state) => state.createUser.value);
  const dispatch = useDispatch();

  return (
    <section className="container py-[30px]">
      <table className="w-full border shadow-md">
        <thead className="bg-slate-300">
          <tr className="h-10 text-center">
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Profession</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, index) => (
            <tr key={item.id} className="border-t text-center">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.age}</td>
              <td className="p-2">{item.profession}</td>
              <td className="p-2">
                <button
                  onClick={() => dispatch(deleteUser(item))}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default memo(Index);
