import { prodTemplate } from "./prodsTemplate.js";

export function prodSerch() {
  const $buscar = document.querySelector("#form"),
    $input = document.querySelector(".input");

  document.addEventListener("submit", (e) => {
    if (e.target === $buscar) {
      e.preventDefault();

      let buscarProd = e.target.products.value;

      e.target.products.value = "";

      document.querySelector(".cards").innerHTML = `<template id="template">
   <figure>
    <img>
    <div class="figure-data">
     <figcaption></figcaption>
     <h3></h3>
     <button>Comprar</button>
    </div>
   </figure>
  </template>`;

      prodTemplate(buscarProd);
    }
  });
}
