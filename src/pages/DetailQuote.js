import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DetailQuote = () => {
  const params = useParams();
  const match = useRouteMatch();

  const DUMMY_QUOTES = [
    { id: "q1", author: "Max", text: "Learning React is fun" },
    { id: "q2", author: "Jhon", text: "Learning React is great" },
  ];

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteID);

  if (!quote) {
    return <p>Not found quote</p>;
  }

  return (
    <section>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default DetailQuote;
