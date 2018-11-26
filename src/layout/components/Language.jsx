/**
 * The component represents a dropdown menu that allow user
 * to select language of the interface.
 */

import React from 'react';
import styled from 'styled-components';
import { Dropdown, Icon } from 'semantic-ui-react';

const Trigger = styled.span`
    color: #ffffff;
    font-size: 14px;
    opacity: 0.5;

    transition: opacity 0.6s;
    &:hover {
        opacity: 1;
    }
`;

const Globe = styled(Icon)`
    font-size: 20px;
`;

const Caret = styled(Icon)`
    margin-left: 5px !important;
    margin-right: 0px !important;
`;

const Language = ({ active, options, onChange }) => (
    <Dropdown
        trigger={
            <Trigger>
                <Globe name="world" size="large" />
                {active.text}
                <Caret name="caret down" size="small" />
            </Trigger>
        }
        icon={null}
        value={active.value}
        options={options}
        onChange={(e, { value }) => onChange(value)}
        selectOnBlur={false}
    />
);

export default Language;
