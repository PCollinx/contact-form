document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true

        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const queryType = document.querySelector('input[name="query"]:checked');
        const message = document.getElementById('message');
        const checkbox = document.getElementById('checkbox');
        const success =  document.getElementById("success-message")

        success.classList.remove('active');

        radio1.classList.remove('checked')
        radio2.classList.remove('checked')


        document.querySelectorAll('.error-message').forEach((error) => {
            error.style.display = 'none';
            error.textContent = '';
        });

        if (!firstName.value.trim('')) {
            firstName.style.border = '1px solid hsl(0, 66%, 56%)'
            document.getElementById('firstname-error').textContent = 'This Field is required.';
            document.getElementById('firstname-error').style.display = 'block';
            isValid = false;
        }

        if (!lastName.value.trim('')) {
            lastName.style.border = '1px solid hsl(0, 66%, 56%)'
            document.getElementById('lastname-error').textContent = 'This Field is required.';
            document.getElementById('lastname-error').style.display = 'block';
            isValid = false;
        }

        if (!email.value.trim('')) {
            email.style.border = '1px solid hsl(0, 66%, 56%)'
            document.getElementById('email-error').textContent = 'Email address is required.';
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        } else if (!validateEmail(email.value.trim(''))) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address';
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        }

        if (!queryType) {
            document.getElementById('query-error').textContent = 'Please select query type.';
            document.getElementById('query-error').style.display = 'block';
            isValid = false;
        } 

        if (!message.value.trim('')) {
            message.style.border = '1px solid hsl(0, 66%, 56%)'
            document.getElementById('message-error').textContent = 'This field is required.';
            document.getElementById('message-error').style.display = 'block';
            isValid = false;
        }

        if (!checkbox.checked) {
            document.getElementById('checkbox-error').textContent = 'To submit this form, please consent to being contacted.';
            document.getElementById('checkbox-error').style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            success.textContent =
                "Thanks for completing the form. We'll be in touch soon!";
            success.style.display = 'block';
            success.classList.add('active')
            form.reset();
        }

   
    });

    function validateEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    const radio1 = document.getElementById('radio-support');
    const radio2 = document.getElementById('radio-general');
    const radioSupport = document.getElementById('support-request');
    const radioGeneral = document.getElementById('general-enquiry');
 

    radioSupport.addEventListener('click', function () {
        radio1.classList.add('checked')
        radio2.classList.remove('checked')
    })

    radioGeneral.addEventListener('click', function () {
        radio2.classList.add('checked')
        radio1.classList.remove('checked')
    })

});


