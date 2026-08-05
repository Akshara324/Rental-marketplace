const rentButtons = document.querySelectorAll(".rent-btn");

rentButtons.forEach(button => {

    button.addEventListener("click", () => {

        const item = {

            id: button.dataset.id,
            name: button.dataset.name,
            price: button.dataset.price,
            image: button.dataset.image

        };

        localStorage.setItem("selectedItem", JSON.stringify(item));

        window.location = "Booking.html";

    });

});

const detailsButtons=document.querySelectorAll(".details-btn");

detailsButtons.forEach(button=>{

button.addEventListener("click",()=>{

const id = button.dataset.id;

window.location = `Product.html?id=${id}`;
});

});