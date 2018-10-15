// import config from './config';

module.exports = {
    schemas: {
        backend: {
            schema: 'schema.json', // if not defined the an introspection query will be run
            endpoint: 'http://localhost:8080/graphql', // if not defined the schema will be downloaded from Apollo Engine
            // engineKey: 'my-engine-key', // use this key when connecting to Apollo Engine
        },
    },
    queries: [
        // optional if you only have one schema
        {
            schema: 'backend', // reference the previously defined schema
            includes: ['**/*.js'], // load queries from .tsx files
            excludes: ['node_modules/**'], // don't include any matching files from node_modules
        },
    ],
};
