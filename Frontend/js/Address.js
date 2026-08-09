const form = document.getElementById("addressForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user ? user.id : 1;

    const addressData = {

        user_id: userId,

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

        const response = await fetch("/api/address/add", {

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