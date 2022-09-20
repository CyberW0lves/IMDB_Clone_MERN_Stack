import styles from "./styles.module.css";

const Table = ({ movies }) => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.title_tab}>Title</p>
				<p className={styles.genre_tab}>Genre</p>
				<p className={styles.rating_tab}>Rating</p>
			</div>
			{movies.map((movie) => (
				<div className={styles.movie} key={movie._id}>
					<div className={styles.title_container}>
						<img src={movie.img} alt="movie" className={styles.movie_img} />
						<p className={styles.movie_title}>
							{movie.name} ({movie.year})
						</p>
					</div>
					<div className={styles.genre_container}>
						{movie.genre.map((genre, index) => (
							<p key={genre} className={styles.movie_genre}>
								{genre}
								{index !== movie.genre.length - 1 && "/"}
							</p>
						))}
					</div>
					<div className={styles.rating_container}>
						<img
							src="./images/star.png"
							alt="star"
							className={styles.star_img}
						/>
						<p className={styles.movie_rating}>{movie.rating}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Table;
