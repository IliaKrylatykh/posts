import styles from './fullPost.module.scss'
import FullPostSvg from './FullPostSvg'

const FullPost = () => {
	return (
		<div className={styles.container}>
			<div className={styles.bg}>
				<div className={styles.poster}></div>
				<div className={styles.fill}></div>
			</div>
			<div className={styles.postContainer}>
				<div className={styles.title}>a sect of people noticed an anomaly.</div>
				<div className={styles.textContainer}>
					<div className={styles.authorInfo}>
						<div className={styles.avatar}>
							<img
								className={styles.userProfile}
								src='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/04/dogecoin.jpeg.jpg'
								alt='user'
							/>
						</div>
						<div className={styles.authorDate}>
							<div className={styles.authorName}>alisa</div>
							<div className={styles.date}>February 03, 20:23</div>
						</div>
					</div>
					<div className={styles.text}>
						unlikely that someone will translate it. According to him, after the
						creation of the Space Shuttle system and the adoption of
						recommendations after the Challenger accident in 1986, there was "a
						kind of euphoria" in the United States, and they believed that "the
						ship is so good that nothing more can happen to it." Zheleznyakov
						called the Columbia accident a consequence of this attitude. It is
						now noticeable how stringent requirements hamper the creation of new
						space technology in the United States. The development of the Orion
						spacecraft for flights to the moon is not moving "as fast as we
						would like." With a significant lag behind the original plans, the
						development of SpaceX's Dragon ships and Boeing's Starliner was also
						going on. The second has not yet flown in manned mode. Jupiter is
						the fifth planet from the Sun and the largest in the Solar System.
						It is a gas giant with a mass more than two and a half times that of
						all the other planets in the Solar System combined, and slightly
						less than one one-thousandth the mass of the Sun. Jupiter is the
						third brightest natural object in the Earth's night sky after the
						Moon and Venus, and it has been observed since prehistoric times. It
						was named after Jupiter, the chief deity of ancient Roman religion.
						Jupiter is primarily composed of hydrogen, followed by helium, which
						constitutes a quarter of its mass and a tenth of its volume. The
						ongoing contraction of Jupiter's interior generates more heat than
						the planet receives from the Sun. Because of its rapid rotation rate
						of 1 rotation per 10 hours, the planet's shape is an oblate
						spheroid: it has a slight but noticeable bulge around the equator.
						The outer atmosphere is divided into a series of latitudinal bands,
						with turbulence and storms along their interacting boundaries. A
						prominent result of this is the Great Red Spot, a giant storm which
						has been observed since at least 1831. Jupiter is surrounded by a
						faint planetary ring system and has a powerful magnetosphere. The
						planet's magnetic tail is nearly 800 million kilometres (5.3
						astronomical units; 500 million miles) long. Jupiter has 95 known
						moons and probably many more, including the four large moons
						discovered by Galileo Galilei in 1610: Io, Europa, Ganymede, and
						Callisto. Ganymede, the largest of the four, is larger than the
						planet Mercury. Callisto is the second largest; Io and Europa are
						approximately the size of Earth's moon. Pioneer 10 was the first
						spacecraft to visit Jupiter, making its closest approach to the
						planet in December 1973. Jupiter has since been explored by multiple
						robotic spacecraft, beginning with the Pioneer and Voyager flyby
						missions from 1973 to 1979. The Galileo orbiter arrived in orbit
						around Jupiter in 1995. In 2007, New Horizons visited Jupiter for a
						gravity assist to increase its speed and bend its trajectory on the
						way to Pluto. The latest probe to visit Jupiter, Juno, entered its
						orbit in July 2016. Future targets for exploration in the Jupiter
						system include its moon Europa, which probably has an ice-covered
						liquid ocean which scientists think could sustain life.
					</div>
					<div className={styles.stats}>
						<div className={styles.likeCommentShare}>
							<div className={styles.likes}>
								<FullPostSvg id='likes' />
								<div className={styles.likesCount}>27</div>
							</div>
							<div className={styles.comments}>
								<FullPostSvg id='comments' />
								<div className={styles.commentsCount}>4</div>
							</div>
							<div className={styles.share}>
								<FullPostSvg id='share' />
							</div>
						</div>
						<div className={styles.views}>
							<FullPostSvg id='views' />
							<div className={styles.viewsCount}>95</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FullPost
