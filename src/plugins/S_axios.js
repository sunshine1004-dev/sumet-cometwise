// https://axios-http.com/docs/intro

import axios from "axios";

export default class S_axios {
  constructor(
    base_url = "https://baseapi.suments.com/Api",
    timeout = 6000,
    header_content_type = "application/x-www-form-urlencoded",
    header_accept = "application/json"
  ) {
    this.axios_int = axios.create({
      baseURL: base_url,
      timeout: timeout,
      headers: {
        "Content-Type": header_content_type,
        Accept: header_accept
      }
    });

    this._config_interceptors_response();
    this._config_interceptors_request();

    this.TIMEOUT_USER = process.env.VUE_APP_SESSION_TIMEOUT;
  }

  _config_interceptors_response() {
    this.axios_int.interceptors.response.use(
      function(successRes) {
        //console.log(successRes.data);
        if (successRes.data.hasOwnProperty("dataUser")) {
          if (successRes.data.dataUser !== null) {
            for (var [key, value] of Object.entries(successRes.data.dataUser)) {
              localStorage.setItem("BF_".concat(key), value);
            }
          }
        }

        if (successRes.data.hasOwnProperty("timeout")) {
          if (successRes.data.timeout !== null) {
            localStorage.setItem(
              "BF_".concat("timeout"),
              successRes.data.timeout
            );
          }
        }

        return successRes;
      },
      function(error) {
        //console.log("I'M IN INT_RESP_ERR")
        //console.log(error)
        return Promise.reject(error);
      }
    );
  }

  _config_interceptors_request() {
    this.axios_int.interceptors.request.use(
      function(successfulReq) {
        // JAVI TODO:
        // El token de autenticación debe ir puesto en las cabeceras. Este sería el sitio donde hacerlo.
        return successfulReq;
      },
      function(error) {
        //console.log("I'M IN INT_REQ_ERR")
        return Promise.reject(error);
      }
    );
  }

  post(service, data = 0) {
    if (data == 0) {
      data = Object();
    }
    data = this._add_token(data);
    return this.axios_int.post(service, this._prepare_data(data));
  }

  get(service, data) {
    return;
  }

  check_timeout() {
    if (localStorage.getItem("BF_timeout")) {
      var dateLastCall = new Date(localStorage.getItem("BF_timeout"));
      var dateNow = new Date();

      var diffInMilliSeconds = Math.abs(dateNow - dateLastCall) / 1000;

      var minutes = Math.floor(diffInMilliSeconds / 60) % 60;

      if (this.TIMEOUT_USER - minutes > 0) {
        // All on time
        return true;
      } else {
        return false; // last action too long ago
      }
    } else {
      // First time login
      return true;
    }
  }

  _prepare_data(data) {
    var tmp_data = new URLSearchParams();

    for (var key in data) {
      //console.log(data[key])
      tmp_data.append(key, data[key]);
    }

    return tmp_data;
  }

  _add_token(data) {
    var key_token = "token";

    if (localStorage.getItem(key_token)) {
      data[key_token] = localStorage.getItem(key_token);
    }
    return data;
  }
}
