import { InformationLayout } from './InformationLayout';

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	const getStatus = () => {
		if (isDraw === true) {
			return 'Ничья';
		}
		if (isDraw === false && isGameEnded === true) {
			return `Победа: ${currentPlayer}`;
		} else if (isDraw === false && isGameEnded === false) {
			return `Ходит: ${currentPlayer}`;
		}
	};

	return (
		<>
			<InformationLayout getStatus={getStatus} />
		</>
	);
};
