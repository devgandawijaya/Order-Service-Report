const User = require("../models/user");

class UserViewModel {
  async getAllMtiH1() {
    const allsnMtih1 = await User.fetchAllSnMt1();
    return allsnMtih1;
  }

  async fetchAllSn1Year() {
    const fetchAllSn1Year = await User.fetchAllSn1Year();
    return fetchAllSn1Year;
  }

  async getAllSn() {
    const allsn = await User.getAllSn();
    return allsn;
  }

  async getAllJo(req) {
    const alljo = await User.fetchAllJO(req);
    return alljo;
  }

  async getAllJoActive() {
    const alljo = await User.alljo();
    return alljo;
  }

  async getAllJobSelesaiKunjungan() {
    const alljo = await User.alljobselesaikunjungan();
    return alljo;
  }

  async getReportPM() {
    const alljo = await User.reportPM();
    return alljo;
  }
  
}

module.exports = new UserViewModel();
