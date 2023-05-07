import { useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import Wrapper from "../styleWrappers/styleMotivation";
import { motion } from "framer-motion";
import motivateVariants from "../animations/motivateAnimate";
const [motivate] = motivateVariants;

const defaultQuote = {
  text: "I am not afraid of tomorrow, for I have seen yesterday and I love today.",
  author: "William White",
};

const Motivation = () => {
  const [data, setData] = useState(defaultQuote);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.7,
  });

  const url = "https://type.fit/api/quotes";
  const fetchData = useCallback(async (url) => {
    try {
      const resp = await fetch(url);
      const quotes = await resp.json();
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      setData(quote);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData(url);
  }, [fetchData]);

  console.log(window.scrollY, inView);
  return (
    <Wrapper>
      <motion.div
        ref={ref}
        className="container-motivation"
        variants={motivate}
        initial="initialState"
        animate="animateState"
        // transition="transition"
      >
        {inView ? (
          <div className="container">
            <h2 className="quote">{data.text}</h2>
            <p className="author">{data.author}</p>
          </div>
        ) : (
          ""
        )}
      </motion.div>
    </Wrapper>
  );
};

export default Motivation;
