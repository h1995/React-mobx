import { observable } from "mobx";

class HomePM {
  @observable price = 0;

  getPrice = () => {
    this.price += 2;
  };
}

export default HomePM;
