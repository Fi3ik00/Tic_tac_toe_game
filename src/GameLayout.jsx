import { Field } from './components/field/Field';
import styles from './Game.module.css';
import { Information } from './components/information/Information';

export const GameLayout = ({
	field,
	setField,
	isDraw,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
	currentPlayer,
	setCurrentPlayer,
	restartGame,
}) => {
	return (
		<div className={styles.app}>
			<Information
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<Field
				field={field}
				setField={setField}
				isDraw={isDraw}
				setIsDraw={setIsDraw}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
			/>
			<div className={styles.container}>
				<button
					className={styles.restart}
					onClick={() => {
						restartGame();
					}}
				>
					Начать заново
				</button>
			</div>
		</div>
	);
};
