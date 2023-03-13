import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();
  const onAddHandler = (dataQuote) => {
    console.log(dataQuote);

    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={onAddHandler} />;
};

export default NewQuote;
