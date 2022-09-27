import React from 'react';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Home = () => {

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				padding: '25px',
			}}
		>
			<ItemListContainer />
		</div>
	);
};

export default Home;
