import styles from "./styles.module.css";

const Pagination = ({ page, total, limit, setPage }) => {
	const totalPages = Math.ceil(total / limit);

	const onClick = (newPage) => {
		setPage(newPage + 1);
	};

	return (
		<div className={styles.container}>
			{totalPages > 0 &&
				[...Array(totalPages)].map((val, index) => (
					<button
						onClick={() => onClick(index)}
						className={
							page === index + 1
								? `${styles.page_btn} ${styles.active}`
								: styles.page_btn
						}
						key={index}
					>
						{index + 1}
					</button>
				))}
		</div>
	);
};

export default Pagination;
