import { useState } from 'react';
import { GameLayout } from './GameLayout';
import PropTypes from 'prop-types';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const restartGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};

	return (
		<GameLayout
			field={field}
			setField={setField}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			restartGame={restartGame}
		/>
	);
};

GameLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	restartGame: PropTypes.func,
};
