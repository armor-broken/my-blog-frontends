import React from 'react';

import {
    view as TopMenu
} from '../TopMenu';

const Base = ({
    children
}) => {
    return (
        <div>
            <TopMenu />
            <div>{children}</div>
        </div>
    )
}

export default Base;