'use client';

import React, { useState } from 'react';
import styles from '@/styles/Sources.module.css';

const Sources = () => {
	const [isExpanded, setExpansion] = useState(false);
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Sources :</h1>
			<ul className={styles.list}>
				<li className={styles.li}>Persee.fr</li>
				<li className={styles.li}>Wikipédia.com</li>

				<li className={styles.li}>
					The House of Wisdom par Jim Al-Khalili (2011)
				</li>
				<li className={styles.li}>
					Greek Thought, Arabic Culture par Dimitri Gutas (1998)
				</li>
				<li className={styles.li}>
					"The Transmission of Greek and Arabic Sciences" (Muslim
					Heritage)
				</li>
				<li className={styles.li}>
					"Pathways of Knowledge Transmission" (revue HEL)
				</li>

				{!isExpanded && (
					<li
						className={`${styles.more} ${styles.li}`}
						onClick={() => setExpansion(true)}
					>
						+ 11 (étendre)
					</li>
				)}
				{isExpanded && (
					<>
						<li className={styles.li}>Worldhistory.org</li>
						<li className={styles.li}>Openedition.org</li>
						<li className={styles.li}>Lesclesdumoyentorient.com</li>
						<li className={styles.li}>Major-prepa.com</li>
						<li className={styles.li}>Britannica.com</li>
						<li className={styles.li}>Cairn.info</li>
						<li className={styles.li}>Lugatism.com</li>
						<li className={styles.li}>Bnf.fr</li>
						<li className={styles.li}>Lelephant-larevue.fr</li>
						<li className={styles.li}>Omanetlamer.fr</li>
						<li
							className={`${styles.more} ${styles.li}`}
							onClick={() => setExpansion(false)}
						>
							Réduire
						</li>
					</>
				)}
			</ul>
		</div>
	);
};

export default Sources;
