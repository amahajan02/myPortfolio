import React from 'react';

const proressbar = (props) => {
    return (
        <div class="progress">
            <div class="progress-bar" role="progressbar" style={{width: props.percentage}} aria-valuenow={props.percentage} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    );
};

export default proressbar;