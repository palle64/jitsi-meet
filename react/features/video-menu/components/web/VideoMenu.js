/* @flow */

import React from 'react';

/**
 * The type of the React {@code Component} props of {@link VideoMenu}.
 */
type Props = {

    /**
     * The components to place as the body of the {@code VideoMenu}.
     */
    children: React$Node,

    /**
     * The id attribute to be added to the component's DOM for retrieval when
     * querying the DOM. Not used directly by the component.
     */
    id: string
};

/**
 * React {@code Component} responsible for displaying other components as a menu
 * for manipulating participant state.
 *
 * @param {Props} props - The component's props.
 * @returns {Component}
 */
export default function VideoMenu(props: Props) {
    return (
        <ul
            className = 'popupmenu'
            id = { props.id }>
            { props.children }
        </ul>
    );
}

