import { useEffect, useState } from "react";

export const Dashboard = () => {


  return (
    <div className="w-screen h-screen p-20 grid place-content-center gap-10 text-center">
      <h1>Dashboard</h1>

      {user && (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      )}
    </div>
  );
};