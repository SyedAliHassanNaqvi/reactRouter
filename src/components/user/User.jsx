import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <div className="bg-grey-600 text-red-500 text-center text-3xl p-5 font-bold">
        User: {userid}{" "}
      </div>
    </>
  );
}
export default User;
