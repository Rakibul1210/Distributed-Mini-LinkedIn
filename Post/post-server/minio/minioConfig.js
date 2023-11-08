const Minio = require('minio')

const minioClient = new Minio.Client({
    endPoint:'host.docker.internal',
    port: 9000,
    useSSL: false,
    accessKey: 'A1d5F8yXMywc0ntL5vN9',
    secretKey: 'UEltB1liZqiXixkKNkHWJWbNlrOOcpybFoFYZKWI'
});

module.exports = minioClient;