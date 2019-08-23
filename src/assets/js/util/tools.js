export default {
  // 格式化日期
  // 统一格式化：YYYY-MM-DD HH:mm:ss
  formatDate(date, type = "date") {
    if (!date) return date;
    if (typeof date === "string") {
      if (!date.trim()) {
        return date;
      }
      // IE 下不支持 YYYY-MM-DD 连接符的格式，需转成 /
      date = new Date(date.replace(/-/g, "/").replace("T", " "));
    } else {
      date = new Date(date); // 格式化时间戳（注意根据后台数据看需不需要乘以1000）
    }

    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    if (type === "date") {
      return `${year}/${month}/${day}`;
    } else if (type === "datetime") {
      return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
    } else if (type === "time") {
      return `${hour}:${minute}:${second}`;
    } else return date;
  },

  // 获取唯一ID
  getOnlyId(tag) {
    return `${tag}-${new Date().getTime()}-${
      Math.random()
        .toString()
        .split(".")[1]
    }`;
  },

  // 16进制颜色转rgba
  getRGBA(hex, alpha = 1) {
    let rgb = [0, 0, 0];
    if (/#(..)(..)(..)/g.test(hex)) {
      rgb = [
        parseInt(RegExp.$1, 16),
        parseInt(RegExp.$2, 16),
        parseInt(RegExp.$3, 16)
      ];
      rgb.push(alpha);
    }
    return `rgba(${rgb.join(",")})`;
  }
};
