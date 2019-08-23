export default {
  setCookie(name, value, expireSeconds, domain) {
    let exdate = new Date();
    exdate.setTime(exdate.getTime() + expireSeconds * 1000);
    document.cookie =
      `${name}=${escape(value)}` +
      (expireSeconds == null ? "" : `;expires=${exdate.toGMTString()}`) +
      (domain == null ? "" : `;domain=${domain}`) +
      `;path=/`;
  },
  getCookie(name) {
    if (document.cookie.length > 0) {
      let start = document.cookie.indexOf(name + "=");
      if (start != -1) {
        start = start + name.length + 1;
        let end = document.cookie.indexOf(";", start);
        if (end == -1) end = document.cookie.length;
        return unescape(document.cookie.substring(start, end));
      }
    }
    return "";
  },
  delCookie(name) {
    this.setCookie(name, "", -1);
  }
};
