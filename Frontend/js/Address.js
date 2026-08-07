const form = document.getElementById("addressForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const addressData = {

        user_id: 1, // We'll replace this with the logged-in user's ID later

        full_name: document.getElementById("name").value,

        phone: document.getElementById("phone").value,

        address_line:
            document.getElementById("house").value +
            ", " +
            document.getElementById("street").value +
            ", " +
            document.getElementById("landmark").value,

        city: document.getElementById("city").value,

        state: document.getElementById("state").value,

        pincode: document.getElementById("pin").value
    };

    try {

        const response = await fetch("https://rental-marketplace-2.onrender.com/api/address", {
 {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(addressData)

        });

        const data = await response.json();

        alert(data.message);

        if (response.ok) {

            // Optional: Keep a local copy
            localStorage.setItem("address", JSON.stringify(addressData));

            window.location.href = "Payment.html";
        }

    } catch (err) {

        console.log(err);

        alert("Unable to save address.");

    }

});