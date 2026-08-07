const item = JSON.parse(localStorage.getItem("selectedItem"));

if(item){

    document.getElementById("itemImage").src = item.image;
    document.getElementById("itemName").innerHTML = item.name;
    document.getElementById("pricePerDay").innerHTML = item.price;

}else{

    alert("No product selected!");

    window.location="Index.html";

}

const pricePerDay = Number(item.price);

const start = document.getElementById("startDate");
const end = document.getElementById("endDate");

const days = document.getElementById("days");
const total = document.getElementById("total");

function calculate(){

    if(start.value && end.value){

        const startDate = new Date(start.value);
        const endDate = new Date(end.value);

        const diff = endDate - startDate;

        const rentalDays = diff / (1000 * 60 * 60 * 24);

        if(rentalDays > 0){

            days.innerHTML = rentalDays;
            total.innerHTML = rentalDays * pricePerDay;

        }else{

            days.innerHTML = 0;
            total.innerHTML = 0;

        }

    }

}

start.addEventListener("change", calculate);
end.addEventListener("change", calculate);

document.getElementById("continueBtn").addEventListener("click", async () => {

    if (Number(total.innerHTML) === 0) {
        alert("Please select valid rental dates.");
        return;
    }

    const bookingData = {
        user_id: 1, // We'll replace this with the logged-in user's ID later
        product_id: item.id,
        start_date: start.value,
        end_date: end.value,
        rental_days: Number(days.innerHTML),
        total_amount: Number(total.innerHTML)
    };

    try {

        const response = await fetch("http://localhost:5000/api/bookings/add", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(bookingData)

        });

        const data = await response.json();

        alert(data.message);

        if (response.ok) {

            localStorage.setItem("bookingDays", days.innerHTML);
            localStorage.setItem("bookingTotal", total.innerHTML);

            window.location.href = "Address.html";
        }

    } catch (err) {

        console.log(err);
        alert("Booking Failed");

    }

});