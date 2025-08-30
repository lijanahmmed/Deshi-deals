
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

//delegation

getElement("product-box").addEventListener("click", function (e) {
  if (e.target.className.includes("cart-btn")) {
    const cartButton = e.target;
    const productImg =
      cartButton.parentNode.parentNode.children[0].children[0].src;

    const productTitle =
      cartButton.parentNode.parentNode.children[1].children[0].innerText;
    const productPrice =
      cartButton.parentNode.parentNode.children[1].children[2].children[0]
        .innerText;

    const totalPrice = getElement("total-price").innerText;

    const currentTotal = Number(productPrice) + Number(totalPrice);
    getElement("total-price").innerText = currentTotal;

    const cartContainer = getElement("cart-container");

    const newCart = document.createElement("div");
    newCart.innerHTML = `
    <div class="bg-gray-200 rounded-xl flex justify-between p-4">
                  <img src="${productImg}" alt="" class="w-10" />
                  <div class="">
                    <h2 class="font-bold">${productTitle}</h2>
                    <h2 class="">${productPrice} Tk</h2>
                  </div>
            </div>
    `;

    cartContainer.append(newCart);

    const quantity = getElement("total-quantity").innerText;
    console.log(quantity);

    const currentQuantity = Number(quantity) + 1;
    getElement("total-quantity").innerText = currentQuantity;
  }
});


//traverse technique

// const cartBtns = document.getElementsByClassName("cart-btn");

// for (let cartButton of cartBtns) {
//   cartButton.addEventListener("click", function () {
//     const productImg =
//       cartButton.parentNode.parentNode.children[0].children[0].src;

//     const productTitle =
//       cartButton.parentNode.parentNode.children[1].children[0].innerText;

//     // console.log(productTitle);
//     const productPrice =
//       cartButton.parentNode.parentNode.children[1].children[2].children[0]
//         .innerText;

//     const totalPrice = getElement("total-price").innerText;

//     const currentTotal = Number(productPrice) + Number(totalPrice);
//     getElement("total-price").innerText = currentTotal;

//     const cartContainer = getElement("cart-container");

//     const newCart = document.createElement("div");
//     newCart.innerHTML = `
//     <div class="bg-gray-200 rounded-xl flex justify-between p-4">
//                   <img src="${productImg}" alt="" class="w-10" />
//                   <div class="">
//                     <h2 class="font-bold">${productTitle}</h2>
//                     <h2 class="">${productPrice} Tk</h2>
//                   </div>
//             </div>
//     `;

//     cartContainer.append(newCart);

//     const quantity = getElement("total-quantity").innerText;
//     console.log(quantity);

//     const currentQuantity = Number(quantity) + 1;
//     getElement("total-quantity").innerText = currentQuantity;
//   });
// }


