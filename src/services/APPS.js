import S_axios from "@/plugins/S_axios";

export default class APPS {
  constructor(router) {
    this.axios_int = new S_axios();

    this.data = Object;
    this.router = router;
  }

  GO_TO_PREVIOUS_PAGE() {
    this.router.push("/dashboard");
  }

  MY_FIRST_APP_SERVICE(param) {
    // console.log(param);
    // return this._call_service("/MY_FIRST_EXAMPLE");
  }

  MY_SECOND_APP_SERVICE() {
    return this._call_service("/MY_FIRST_EXAMPLE");
  }

  HANDLE_PAGE_APP_SERVICE(param) {
    const service_name =
      param.title == "RequestMySitePage"
        ? "my-sites"
        : param.isEdit
        ? "edit-site"
        : "add-site";
    return this._call_service(`/dashboard/${service_name}`);
  }

  // JAVI TODO:
  // Estos dos metodos privados habría que sacarlos a una clase parent de la que heredan BFS y APPS
  // Estas dos clases sólo debenrían tener métodos PUBLICOS
  _call_service(service_name) {
    if (this.axios_int.check_timeout()) {
      return this.axios_int.post(service_name, this.data);
    } else {
      // this.router.push("/login");
      this.router.push(service_name);
    }
  }
}
