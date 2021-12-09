"use strict";
let goods = [
   {
      title: "Пианино",
      price: 3000,
      count: 0
  },
  {
      title: "Гитара",
      price: 1200,
      count: 40
  },
  {
      title: "Барабаны",
      price: 2700,
      count: 12
  },
  {
      title: "Флейта",
      price: 900,
      count: 50
  },
  {
      title: "Арфа",
      price: 3400,
      count: 5
  }
];

Vue.createApp({
   data(){
      return{
         goods,
         tabsTitles: ["по количеству", "по цене", "по названию"],
         currentTabTitle: "по количеству"
      }
   },
   methods: {
      getSortedArr(){
         if (this.currentTabTitle === "по количеству")  return this.goods.sort((obj1, obj2) => obj1.count - obj2.count);
         else if (this.currentTabTitle === "по цене") return this.goods.sort((obj1, obj2) => obj1.price - obj2.price);
         else if (this.currentTabTitle === "по названию") return this.goods.sort((obj1, obj2) => obj1.title.localeCompare(obj2.title));
      },
      defineClass(good){
         if (good.count === 0) return "zero";
         else if (good.count > 1 && good.count < 20) return "not-many";
         else if (good.count > 20) return "many";
      }
   }
}).mount("#app");
