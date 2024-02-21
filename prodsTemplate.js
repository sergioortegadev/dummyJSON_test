import { traerProd } from "./fetch.js";

export async function prodTemplate(search) {
  const products = await traerProd(search);
  const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template").content,
    $fragment = document.createDocumentFragment();

  if (products.length === 0) {
    $cards.innerHTML = `No se encontraron productos.`;
    return;
  }

  products.forEach((el) => {
    $template.querySelector("figcaption").textContent = el.title;
    $template.querySelector("img").setAttribute("src", el.thumbnail);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("h3").textContent = "$" + el.price;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
  });

  $cards.appendChild($fragment);
}
