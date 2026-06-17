document
  .getElementById("sadhvanaEnquiryForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById("sdvSubmitBtn");
    const successMsg = document.getElementById("sdvSuccess");
    const errorMsg = document.getElementById("sdvError");

    successMsg.style.display = "none";
    errorMsg.style.display = "none";

    const payload = {
      name: document.getElementById("sdv-name").value.trim(),
      country_code: document.getElementById("sdv-country-code").value,
      mobile: document.getElementById("sdv-mobile").value.trim(),
      email: document.getElementById("sdv-email").value.trim(),
    };

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Submitting...";

    try {
      const response = await fetch(
        "https://emailjsfuntions-428145106157.asia-south1.run.app/sadhvana-enquiry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      const result = await response.json();

      if (response.ok && result.success) {
        successMsg.style.display = "block";
        document.getElementById("sadhvanaEnquiryForm").reset();
      } else {
        errorMsg.style.display = "block";
      }
    } catch (err) {
      console.error(err);
      errorMsg.style.display = "block";
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = "Submit Enquiry";
    }
  });
