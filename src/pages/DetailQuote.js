import { useParams } from "react-router-dom";

const DetailQuote = () => {
  const param = useParams();

  return (
    <section>
      <h1>Detail Quote</h1>
      <p>{param.quoteID}</p>
    </section>
  );
};

export default DetailQuote;
