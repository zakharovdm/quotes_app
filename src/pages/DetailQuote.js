import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

const DetailQuote = () => {
  const param = useParams();

  return (
    <section>
      <h1>Detail Quote</h1>
      <p>{param.quoteID}</p>
      <Route path={`/quotes/${param.quoteID}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default DetailQuote;
