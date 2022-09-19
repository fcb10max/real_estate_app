import React from "react";
import { useParams } from "react-router-dom";
import catalgoItems from "../../catalogItems";

const SingleHome: React.FC = () => {
  const { id } = useParams();
  console.log(catalgoItems[id ? parseInt(id) : 0]);

  return <div>SingleHome</div>;
};

export default SingleHome;
