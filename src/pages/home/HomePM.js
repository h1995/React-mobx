import { observable, computed } from "mobx";
import store from "../../store";
const APP_ENDPOINT = "";
const DATA = "";
class HomePM {
  @observable price = 0;
  @computed
  get dashboard() {
    return store.dashboard;
  }
  getPrice = () => {
    this.price += 2;
  };
  mounted() {
    if (!store.dashboard.status) {
      store
        .loadDashboard(APP_ENDPOINT, DATA)
        .then(() => {
          console.log("Data loaded for dashboard");
        })
        .catch(err => {
          console.log("error while loading dashboard data", err);
        });
    }
  }
}

export default HomePM;
