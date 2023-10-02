import React from 'react';
import { Heading } from '../components/ui';
import { theme } from '../theme.css';
import * as styles from './StyleTitle.css';

export default function StyledTitle({ text, n, style = {} }) {
    // Split the title into an array of words
    const words = text.split(' ');

    // Determine the index from which the last n words should be styled in red
    const startIndex = Math.max(words.length - n, 0);

    // Create a new array of styled spans for each word
    const styledWords = words.map((word, index) => {
        const color = index >= startIndex ? '#b11117' : 'black';
        return (
            <span key={index} style={{ color }}>
                {word}{' '}
            </span>
        );
    });

    return <Heading className={styles.HeadingStyle} style={style} >{styledWords}</Heading>;
}
