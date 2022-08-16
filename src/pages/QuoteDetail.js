import { useParams } from 'react-router-dom';

const QuoteDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{`Quote ID: ${params.quoteId}`}</p>
    </>
  );
};

export default QuoteDetail;
