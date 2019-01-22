import { withStateHandlers } from 'recompose';

const withHover = ({ hover: false },
{
    mouseOver: () => () => ({
        hover: true,
    }),

    mouseOut: () => () => ({
        hover: false,
    }),
});
