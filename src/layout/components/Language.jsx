/**
 * The component represents a dropdown menu that allow user
 * to select language of the interface.
 */

import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';

const Language = ({ active, options, onChange }) => {
    return (
        <Dropdown
            trigger={
                <span>
                    <Icon name="world" />
                    {active.text}
                </span>
            }
            value={active.value}
            options={options}
            onChange={(e, { value }) => onChange(value)}
            selectOnBlur={false}
        />
    );
};

export default Language;
