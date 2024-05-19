import styles from './Information.module.css';

export const InformationLayout = ({ getStatus }) => {
	return (
		<div className={styles.container}>
			<div className={styles.information}>{getStatus()}</div>
		</div>
	);
};
