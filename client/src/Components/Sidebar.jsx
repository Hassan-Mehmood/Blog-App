import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { BsPencilSquare } from "react-icons/bs";

import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <nav className="fixed left-0 top-0 bottom-0 w-20 ">
      <div className="flex flex-col items-center justify-center h-full">
        <ul>
          <li className="mb-4">
            <Link to={"/"}>{<GrHomeRounded size={25} />}</Link>
          </li>
          <li>
            <Link to={"/"}>{<BsPencilSquare size={25} />}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
