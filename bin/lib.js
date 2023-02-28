module.exports = {
  init: (option, param) => {
    console.log("这是init方法");
    switch (option) {
      case "name":
        console.log("init了" + param);
        break;

      default:
        break;
    }
  },
};
