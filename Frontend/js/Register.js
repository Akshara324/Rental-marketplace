const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;


    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }


    try {

        const response = await fetch(
            "https://rental-marketplace-2.onrender.com/api/auth/register",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    password
                })
            }
        );


        const data = await response.json();

        alert(data.message);


        if(response.ok){

            window.location.href="Login.html";

        }


    } catch(err){

        console.log(err);

        alert("Unable to connect to the server.");

    }

});