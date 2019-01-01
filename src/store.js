import { observable } from "mobx";
class GlobalStore {
  @observable dashboard = {};

  loadDashboard = (endPoint, initData) => {
    if (endPoint && initData) {
      return fetch(endPoint, initData)
        .then(data => {
          this.dashboard = data;
          console.log("data", data);
        })
        .catch(err => console.log);
    } else {
      return Promise.reject("No endpoint defined!");
    }
  };
}
const store = new GlobalStore();
export default store;
