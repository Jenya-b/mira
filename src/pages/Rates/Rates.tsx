import { FC } from 'react';

import { rateList } from '@/constants/rates';

import { Card } from './Card';
import { Container, RatesWrap, Title, Wrapper } from './Rates.styled';

const Rates: FC = () => (
	<Wrapper>
		<Container>
			<Title>Тарифы и оплата</Title>
			<RatesWrap>
				{rateList.map((item) => (
					<Card key={item.title} {...item} />
				))}
			</RatesWrap>
		</Container>
	</Wrapper>
);

export default Rates;
