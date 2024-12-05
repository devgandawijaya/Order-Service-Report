const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/allsnmith1", userController.getAllSnMtiH1);
router.get("/allsn", userController.getAllSns);
router.post("/alljo", userController.postJO);
router.get("/alljoActive", userController.getAllJO);
router.get("/alljobSelesaiKunjungan", userController.getAllJobKunjungan);
router.get("/reportpm", userController.getReportPM);

module.exports = router;