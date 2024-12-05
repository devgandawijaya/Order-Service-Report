const userViewModel = require("../viewmodel/userViewModel");
const userView = require("../view/userView");
const ExcelJS = require("exceljs");
const nodemailer = require("nodemailer");
const excl = require("../hellpers/excelHelper");
const mail = require("../hellpers/mailHelper");

class UserController {
  async getAllSnMtiH1(req, res) {
    try {
      const allsnmtih1 = await userViewModel.getAllMtiH1();
      const _reportSnAllMtiH1 = await excl.reportSnAllMtiH1(allsnmtih1);
      const emailResponse = await mail.sendEmail(_reportSnAllMtiH1);

      if (emailResponse.success) {
        res.status(200).send({
          code: "200",
          message: "Email successfully sent",
          details: emailResponse.response,
        });
      } else {
        res.status(500).send({
          code: "500",
          message: "Failed to send email",
          error: emailResponse.error,
        });
      }
    } catch (error) {
      res.status(500).send({
        code: "500",
        message: "An unexpected error occurred",
        error: error.toString(),
      });
    }
  }

  async getAllSn(req, res) {
    try {
      const fetchAllSn1Year = await userViewModel.fetchAllSn1Year();
      const _reportAllSn = await excl.reportAllSn(fetchAllSn1Year);
      const emailResponse = await mail.sendEmail(_reportAllSn);

      if (emailResponse.success) {
        res.status(200).send({
          code: "200",
          message: "Email successfully sent",
          details: emailResponse.response,
        });
      } else {
        res.status(500).send({
          code: "500",
          message: "Failed to send email",
          error: emailResponse.error,
        });
      }
    } catch (error) {
      res.status(500).send({
        code: "500",
        message: "An unexpected error occurred",
        error: error.toString(),
      });
    }
  }

  async getAllSns(req, res) {
    try {
      const allsns = await userViewModel.getAllSn();
      const _reportAllSn = await excl.reportSn(allsns);
      const emailResponse = await mail.sendEmail(_reportAllSn);

      if (emailResponse.success) {
        res.status(200).send({
          code: "200",
          message: "Email successfully sent",
          details: emailResponse.response,
        });
      } else {
        res.status(500).send({
          code: "500",
          message: "Failed to send email",
          error: emailResponse.error,
        });
      }
    } catch (error) {
      res.status(500).send({
        code: "500",
        message: "An unexpected error occurred",
        error: error.toString(),
      });
    }
  }

  async postJO(req, res) {
    try {
      const { email } = req.body;

      const alljo = await userViewModel.getAllJo(req);
      const _alljo = await excl.reportJO(alljo);
      const emailResponse = await mail.sendEmailEmail(_alljo, email);

      if (emailResponse.success) {
        res.status(200).send({
          code: "200",
          message: "Email successfully sent",
          details: emailResponse.response,
        });
      } else {
        res.status(500).send({
          code: "500",
          message: "Failed to send email",
          error: emailResponse.error,
        });
      }
    } catch (error) {
      res.status(500).send({
        code: "500",
        message: "An unexpected error occurred",
        error: error.toString(),
      });
    }
  }


  async getAllJO(req, res) {

    try {

      const email = ['sarah.fitri@jadinpratama.com', 'handy.jadin@gmail.com', 'destiaaraa99@gmail.com','kibeng.siahaan@gmail.com'];
      const result = await userViewModel.getAllJoActive();
      const result_jo = await excl.reportJOActive(result);
      const emailResponse = await mail.sendEmailEmail(result_jo, email);

      if (emailResponse.success) {
        res.status(200).send({
          code: "200",
          message: "Email successfully sent",
          details: emailResponse.response,
        });
      } else {
        res.status(500).send({
          code: "500",
          message: "Failed to send email",
          error: emailResponse.error,
        });
      }

    } catch (error) {
      res.status(500).send({
        code: "500",
        message: "An unexpected error occurred",
        error: error.toString(),
      });
    }

  }


  async getAllJobKunjungan(req, res) {

    try {

      const result = await userViewModel.getAllJobSelesaiKunjungan();
      const result_jo = await excl.reportAllJoSelesaiKunjungan(result);
      const emailResponse = await mail.sendAllJobSelesaiKunjungan(result_jo);
      if (emailResponse.success) {
        res.status(200).send({
          code: "200",
          message: "Email successfully sent",
          details: emailResponse.response,
        });
      } else {
        res.status(500).send({
          code: "500",
          message: "Failed to send email",
          error: emailResponse.error,
        });
      }

    } catch (error) {
      res.status(500).send({
        code: "500",
        message: "An unexpected error occurred",
        error: error.toString(),
      });
    }


  }

  async getReportPM(req, res) {
    try {
      const result = await userViewModel.getReportPM();
      const result_pm = await excl.reportPM(result);
      const emailResponse = await mail.sendReportPM(result_pm);
      if (emailResponse.success) {
        res.status(200).send({
          code: "200",
          message: "Email successfully sent",
          details: emailResponse.response,
        });
      } else {
        res.status(500).send({
          code: "500",
          message: "Failed to send email",
          error: emailResponse.error,
        });
      }
    } catch (error) {
      res.status(500).send({
        code: "500",
        message: "An unexpected error occurred",
        error: error.toString(),
      });
    }
  }

}

module.exports = new UserController();
