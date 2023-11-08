const Minio = require('minio')

const minioClient = new Minio.Client({
    endPoint:'host.docker.internal',
    port: 9000,
    useSSL: false,
    accessKey: 'YpdoMeuft1yhcM9BLIFR',
    secretKey: 'Q6i79iIv40guXaKmMoPa2WeSnTeffgfRQyr1xgnU'
});

module.exports = minioClient;