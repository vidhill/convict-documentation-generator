const sampleConfig = {
    db_host: {
        env: 'DB_HOST',
        format: String,
        doc: 'Database host name/IP',
        default: 8080,
    },
    db_port: {
        env: 'DB_PORT',
        format: 'port',
        doc: 'Database port number',
        default: null,
    },
};

module.exports = {
    sampleConfig,
};
