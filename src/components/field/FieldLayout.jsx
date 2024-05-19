import styles from './Field.module.css';

export const FieldLayout = ({ field, clickHandler }) => {
	return (
		<div className={styles.container}>
			<div className={styles.grid}>
				{field.map((item, index) => {
					return (
						<div
							className={styles.cell}
							key={index}
							onClick={(event) => clickHandler(event, index)}
						>
							{item}
						</div>
					);
				})}
			</div>
		</div>
	);
};
