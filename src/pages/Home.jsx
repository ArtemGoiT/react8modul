import { Container, ExchangeForm, ExchangeInfo, Heading, Loader, Section } from 'components';
import { useSelector } from 'react-redux';
import { selectExchangeInfo, selectIsError, selectIsLoding } from '../reduxState/selectors';

const Home = () => {
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoding);
  const exchangeInfo = useSelector(selectExchangeInfo);

  return (
    <Section>
      <Container>
        <ExchangeForm />
        {!isError && !exchangeInfo && (
          <Heading info title="What currencies do you want to exchange?🙂" />)}
        {exchangeInfo && (
          <ExchangeInfo {...exchangeInfo} />
        )}
        {isLoading && (
          <Loader/>
        )}

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
