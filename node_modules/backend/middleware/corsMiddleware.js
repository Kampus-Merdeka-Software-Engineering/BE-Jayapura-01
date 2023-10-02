function corsMiddleware(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080'); // Ganti ini sesuai dengan domain aplikasi frontend Anda.

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g., in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Handle pre-flight requests (OPTIONS)
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    // Pass to the next layer of middleware
    next();
}

module.exports = corsMiddleware;
