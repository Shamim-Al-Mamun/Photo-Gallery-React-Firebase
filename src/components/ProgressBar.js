import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  const percentage = Math.floor(progress);
  console.log(progress);
  return (
    <>
      <motion.div
        className="progress-bar text-center"
        initial={{ width: 0 }}
        animate={{ width: progress + "%" }}
      >
        {percentage}%
      </motion.div>
    </>
  );
};

export default ProgressBar;
