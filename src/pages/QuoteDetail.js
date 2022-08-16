import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{`Quote ID: ${params.quoteId}`}</p>
      <Route path="/quotes/:quoteId/comments" exact>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
