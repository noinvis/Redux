import React, { memo, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { create } from "../../redux/features/CreateUserSlice";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useRef();
  const age = useRef();
  const profession = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      id: Date.now(),
      name: name.current.value,
      age: age.current.value,
      profession: profession.current.value,
    };

    dispatch(create(userData));
    navigate("/");
  };

  return (
    <section className="py-[30px]">
      <div className="container flex justify-center">
        <div className="flex shadow-md rounded size-[400px] justify-center">
          <div className="flex items-center justify-center p-4">
            <form onSubmit={handleSubmit} className="w-full flex flex-wrap gap-[10px] justify-center">
              <p className="text-center text-[24px]">Create User</p>
              <input
                ref={name}
                type="text"
                placeholder="Your name"
                required
                className="w-full p-2 border rounded"
              />
              <input
                ref={age}
                type="number"
                placeholder="Your age"
                required
                className="w-full p-2 border rounded"
              />
              <input
                ref={profession}
                type="text"
                placeholder="Your profession"
                required
                className="w-full p-2 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(index);
