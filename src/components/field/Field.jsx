import { FieldLayout } from './FieldLayout';
import { useEffect } from 'react';

export const Field = ({
	field,
	setField,
	isDraw,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
	currentPlayer,
	setCurrentPlayer,
}) => {
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const clickHandler = (event, index) => {
		if (event.target && isGameEnded === false && event.target.textContent === '') {
			let newField = [...field];
			newField[index] = currentPlayer;
			setField(newField);
			checkToWin();
		}
	};

	const checkToWin = () => {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
				setCurrentPlayer(field[a]);
				return true;
			}
		}
		return false;
	};

	useEffect(() => {
		if (checkToWin() === false && field.includes('') === false) {
			setIsDraw(true);
		}

		if (checkToWin() === true) {
			setIsGameEnded(true);
		} else if (
			checkToWin() === false &&
			isGameEnded === false &&
			field.some((x) => x === 'X' || x === '0')
		) {
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		}
	}, [field]);

	return <FieldLayout field={field} clickHandler={clickHandler} />;
};
