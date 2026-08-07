cconst params = new URLSearchParams(window.location.search);

const productId = params.get("id");


async function loadProduct() {

    try {

        const response = await fetch(
            `/api/products/${productId}`
        );


        const product = await response.json();


        document.getElementById("productImage").src = product.image;

        document.getElementById("productName").innerHTML = product.name;

        document.getElementById("productPrice").innerHTML = product.price;


        localStorage.setItem(
            "selectedItem",
            JSON.stringify(product)
        );


    } catch(err) {

        console.log(err);

    }

}


loadProduct();



document.getElementById("rentBtn")
.addEventListener("click",()=>{

    window.location.href="Booking.html";

});