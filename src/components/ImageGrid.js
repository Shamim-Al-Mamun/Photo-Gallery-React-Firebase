import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="container-fluid pt-1">
      <div className="card-columns">
        {docs &&
          docs.map((doc) => (
            <motion.div
              className="card"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              s
              onClick={() => setSelectedImg(doc.url)}
            >
              <motion.img
                className="card-img-top materialboxed"
                src={doc.url}
                alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default ImageGrid;
