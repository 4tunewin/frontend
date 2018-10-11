/**
 * @flow
 */

import React from 'react';
import { Button } from 'semantic-ui-react';

type FilterHistoryButtonProps = {
    active: boolean,
    onClick: Function,
};

const FilterHistoryButton = ({
    active,
    onClick,
    ...props
}: FilterHistoryButtonProps) => (
    <Button
        onClick={onClick}
        size="small"
        basic={!active}
        primary
        compact
        {...props}
    >
        only me
    </Button>
);

export default FilterHistoryButton;
