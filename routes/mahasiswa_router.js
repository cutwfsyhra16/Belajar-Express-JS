var express = require('express');
var router = express.Router();

router.get("/mahasiswa", function (req, res, next) {
    res.render("mahasiswa_view", {
        nama: "wifa",
        kelas : "MI.01",
        alamat : "sigli"
    });
});

module.exports = router;