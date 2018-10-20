import { AsyncStorage } from "react-native";
import { createStackNavigator } from "react-navigation";

export const apiSettings = {
  baseUrl: "http://192.168.100.2:9000/",
  orderBeverage: "orderBeverage",
  updateBeverage: "updateBeverage",
  deleteBeverage: "deleteBeverage",
  getStatus: "getStatus",
  getEstimatedTime: "getEstimatedTime",
  getMaschine: "fakestatus",
  myQueue: "myQueue",
  monitoring: "Monitoring"
};

export const buildUrl = path => {
  return apiSettings.baseUrl + path;
};

export const createCoffee = async obj => {
  const url = await buildUrl(apiSettings.orderBeverage);
  const params = {};
  const queryBuilder = await buildQuery(this.params, "orderBeverage", res => {
    this.request = new Request(url + "?" + res, {
      method: "GET"
    });
  });
  for (anzahl = 0; anzahl < obj.quantity; anzahl++) {}
  return fetch(this.request)
    .then(response => {
      // console.log(this.request);
      if ((response.status = 200)) {
        return response.json().then(body => {
          const uuid = body.uuid;
          if (uuid != null) {
            // console.log(obj)
            setStorage(uuid, JSON.stringify(obj));
            return uuid;
          }
          return false;
        });
      } else {
        return false;
      }
    })
    .catch(function(err) {
      return false;
    });
};
