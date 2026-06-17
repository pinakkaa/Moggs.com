
    document.getElementById("footerContactForm").addEventListener("submit", async function (e) {
        e.preventDefault();

        const submitBtn = document.getElementById("footerSubmitBtn");
        const successMsg = document.getElementById("footerSuccess");
        const errorMsg = document.getElementById("footerError");

        successMsg.style.display = "none";
        errorMsg.style.display = "none";

        const payload = {
            name: document.getElementById("footer-name").value.trim(),
            country_code: document.getElementById("footer-country-code").value,
            phone: document.getElementById("footer-phone").value.trim(),
            email: document.getElementById("footer-email").value.trim(),
            message: document.getElementById("footer-message").value.trim()
        };

        submitBtn.disabled = true;
        submitBtn.innerHTML = "SENDING...";

        try {
            const response = await fetch("https://emailjsfuntions-428145106157.asia-south1.run.app/sadhvana-footer-form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                successMsg.style.display = "block";
                document.getElementById("footerContactForm").reset();
            } else {
                errorMsg.style.display = "block";
            }
        } catch (err) {
            console.error(err);
            errorMsg.style.display = "block";
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = "GET IN TOUCH";
        }
    });