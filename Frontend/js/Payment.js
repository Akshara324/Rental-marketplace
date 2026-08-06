<<<<<<< HEAD
const item = JSON.parse(localStorage.getItem("selectedItem"));

document.getElementById("itemName").innerHTML = item.name;
document.getElementById("days").innerHTML = localStorage.getItem("bookingDays");
document.getElementById("amount").innerHTML = localStorage.getItem("bookingTotal");

document.getElementById("payBtn").addEventListener("click", async () => {

    const paymentMethod = document.querySelector(
        'input[name="payment"]:checked'
    ).value;

    const paymentData = {
        booking_id: 8, // We'll replace this with the real booking ID later
        payment_method: paymentMethod,
        amount: Number(localStorage.getItem("bookingTotal"))
    };

    try {

        const response = await fetch(
            "http://localhost:5000/api/payments/pay",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(paymentData)
            }
        );

        const data = await response.json();

        alert(data.message);

        if (response.ok) {

            window.location.href = "Success.html";

        }

    } catch (err) {

        console.log(err);
        alert("Payment Failed");

    }

=======
const item = JSON.parse(localStorage.getItem("selectedItem"));

document.getElementById("itemName").innerHTML = item.name;
document.getElementById("days").innerHTML = localStorage.getItem("bookingDays");
document.getElementById("amount").innerHTML = localStorage.getItem("bookingTotal");

document.getElementById("payBtn").addEventListener("click", async () => {

    const paymentMethod = document.querySelector(
        'input[name="payment"]:checked'
    ).value;

    const paymentData = {
        booking_id: 8, // We'll replace this with the real booking ID later
        payment_method: paymentMethod,
        amount: Number(localStorage.getItem("bookingTotal"))
    };

    try {

        const response = await fetch(
            "http://localhost:5000/api/payments/pay",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(paymentData)
            }
        );

        const data = await response.json();

        alert(data.message);

        if (response.ok) {

            window.location.href = "Success.html";

        }

    } catch (err) {

        console.log(err);
        alert("Payment Failed");

    }

>>>>>>> 163bcbe0287391a2bb6abdcefadc4e9be556f14f
});