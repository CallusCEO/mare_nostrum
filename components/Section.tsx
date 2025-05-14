'use client';

import React from 'react';
import styles from '@/styles/Section.module.css';

interface Props {
	children: React.ReactNode;
}

const Section = ({ children }: Props) => {
	return <div className={styles.container}>{children}</div>;
};

export default Section;
