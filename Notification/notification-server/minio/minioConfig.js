const Minio = require('minio')

const minioClient = new Minio.Client({
    endPoint:'host.docker.internal',
    port: 9000,
    useSSL: false,
    accessKey:'b62CQDNHC5HO3wGh8wFz',
    // secretKey: 'Q6i79iIv40guXaKmMoPa2WeSnTeffgfRQyr1xgnU'
    secretKey:'anld7OtZKNJWtD7qekhtteXdlZIk0GEz0yRiGMtL'
});

module.exports = minioClient;