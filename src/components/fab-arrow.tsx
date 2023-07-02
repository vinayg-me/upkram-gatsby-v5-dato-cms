import React from 'react';

export const FabArrow = ({ variant = 'default', direction = 'right' }) => {
    if (variant === 'default') {
        if (direction === 'right') {
            return (
                <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="FAB button">
                        <g id="Vector">
                            <path d="M56 32.5C56 45.7548 45.2548 56.5 32 56.5C18.7452 56.5 8 45.7548 8 32.5C8 19.2452 18.7452 8.5 32 8.5C45.2548 8.5 56 19.2452 56 32.5Z" fill="#C1DEF4" />
                            <path d="M26.885 25.615L33.755 32.5L26.885 39.385L29 41.5L38 32.5L29 23.5L26.885 25.615Z" fill="#3369CE" />
                        </g>
                    </g>
                </svg>
            );
        }
        return (
            <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="FAB button">
                    <g id="Vector">
                        <path d="M8 32.5C8 45.7548 18.7452 56.5 32 56.5C45.2548 56.5 56 45.7548 56 32.5C56 19.2452 45.2548 8.5 32 8.5C18.7452 8.5 8 19.2452 8 32.5Z" fill="#C1DEF4" />
                        <path d="M37.115 25.615L30.245 32.5L37.115 39.385L35 41.5L26 32.5L35 23.5L37.115 25.615Z" fill="#3369CE" />
                    </g>
                </g>
            </svg>

        );
    }
    if (direction === 'right') {
        return (
            <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="FAB button" opacity="0.2">
                    <g id="Vector">
                        <path d="M56 32.5C56 45.7548 45.2548 56.5 32 56.5C18.7452 56.5 8 45.7548 8 32.5C8 19.2452 18.7452 8.5 32 8.5C45.2548 8.5 56 19.2452 56 32.5Z" fill="#C1DEF4" />
                        <path d="M26.885 25.615L33.755 32.5L26.885 39.385L29 41.5L38 32.5L29 23.5L26.885 25.615Z" fill="#3369CE" />
                    </g>
                </g>
            </svg>
        )

    }
    return (
        <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="FAB button" opacity="0.2">
                <g id="Vector">
                    <path d="M8 32.5C8 19.2452 18.7452 8.5 32 8.5C45.2548 8.5 56 19.2452 56 32.5C56 45.7548 45.2548 56.5 32 56.5C18.7452 56.5 8 45.7548 8 32.5Z" fill="#C1DEF4" />
                    <path d="M37.115 39.385L30.245 32.5L37.115 25.615L35 23.5L26 32.5L35 41.5L37.115 39.385Z" fill="#3369CE" />
                </g>
            </g>
        </svg>
    );

}