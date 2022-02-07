import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { cleint } from "../client";
import MasonrLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
  }, [categoryId]);

  if (loading)
    return <Spinner message="We are adding new ideas to your feed" />;
  return <div></div>;
};

export default Feed;
