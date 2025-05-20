'use client';

import React from 'react';
import styles from '@/styles/Title.module.css';
import Image from 'next/image';

const Title = () => {
	return (
		<nav className={styles.container}>
			<div className={styles.title}>
				<h1>
					Comment les procédés commerciaux des Grecs ont-ils façonné
					ceux des Arabes ?
				</h1>
			</div>
			<div className={styles.rule}></div>
			<div className={styles.subtitle}>
				<Image
					src={'/images/pfp.png'}
					alt='pfp'
					width={40}
					height={40}
					style={{ borderRadius: '50%' }}
				/>
				<h2 className={styles.subNote}>
					Une étude faite par Sirius S.
				</h2>
				<p className={styles.date}>20/05/2025</p>
			</div>
		</nav>
	);
};

export default Title;
