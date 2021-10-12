import S_axios from "@/plugins/S_axios";
import md5 from "md5";
require("md5");

export default class BFS {
  constructor(router) {
    this.axios_int = new S_axios();

    this.router = router;
    this.data = Object;

    localStorage.clear();
  }

  login() {
    var token = this._token_calculator(this.data.user, this.data.pass);
    return this.axios_int.post("/Blogin", { token: token }).then(() => {
      //console.log(response.data);
      localStorage.setItem("token", token);
    });
  }

  logout() {
    this._call_service("/Blogout");
    localStorage.clear();
    this.router.push("/login");
  }

  register() {
    //console.log(this.data)
    return this._call_service("/BuserRegister");
  }

  getUserProfile() {
    return this._call_service("/PGetDetailsUser");
  }

  getUserPlans() {
    return this._call_service("/BgetUserPlans");
  }

  updateUserProfile() {
    //console.log(this.data)
    return this._call_service("/BuserUpdate");
  }

  updateUserPayment() {
    return this._call_service("/BsuscribePlan");
  }

  resetPassword() {
    return this._call_service("/forgotPassword");
  }

  landingContact() {
    return this._call_service("/formLanding");
  }

  getPlansAll() {
    return this._call_service("/BgetPlanList");
  }

  check_timeout() {
    return this.axios_int.check_timeout();
  }

  // JAVI TODO:
  // Estos dos metodos privados habría que sacarlos a una clase parent de la que heredan BFS y APPS
  // Estas dos clases sólo debenrían tener métodos PUBLICOS
  _call_service(service_name) {
    if (this.check_timeout()) {
      this.axios_int.post(service_name, this.data);
    } else {
      this.router.push("/login");
    }
  }

  _token_calculator(email, pass) {
    return md5(email + pass);
  }
}
