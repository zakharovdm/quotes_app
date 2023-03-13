import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const onAddHandler = (dataQuote) => {
    console.log(dataQuote);
  }

  return <QuoteForm onAddQuote={onAddHandler} />;
};

export default NewQuote;
