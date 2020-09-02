const { default: Axios } = require("axios");

const OrderAxios = Axios.create({
    baseURL: "https://pages-b-d.firebaseio.com/",
});
export default OrderAxios;