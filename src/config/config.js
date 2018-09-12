// Settigns for production environment
const production = {
    network: 1,
};

// Settings for development environment
const development = {
    network: '*', // match all networks id
};

// Settings for test environment
const test = {
    network: 3,
};

const config = { production, development, test };

export default Object.assign(
    {},
    config[process.env.REACT_APP_ENV || process.env.NODE_ENV],
);
