import { Wave } from 'react-animated-text';

import {
  Container,
  Filter,
  Heading,
  Loader,
  RatesList,
  Section,
} from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBaseCurrency,
  selectFilteredRates,
  selectIsError,
  selectIsLoding,
  selectRates,
} from '../reduxState/selectors';
import { useEffect } from 'react';
import { fetchLatesSymbols } from '../reduxState/currency/operations';

const Rates = () => {
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoding);
  const baseCurrency = useSelector(selectBaseCurrency);
  const rates = useSelector(selectRates);
  const filterRates = useSelector(selectFilteredRates);
  console.log(filterRates);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLatesSymbols(baseCurrency));
  }, [dispatch, baseCurrency]);
  console.log(rates);
  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />
        {rates.length > 0 && <Filter />}
        {filterRates.length > 0 && <RatesList rates={filterRates} />}

        {isLoading && <Loader />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Rates;
