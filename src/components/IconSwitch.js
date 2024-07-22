import React from 'react';

function IconSwitch({ icon, onSwitch }) {
    return (
        <span className="material-icons" onClick={onSwitch} style={{ cursor: 'pointer' }}>
      {icon}
    </span>
    );
}

export default IconSwitch;
