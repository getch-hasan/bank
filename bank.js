document.getElementById('submit-button').addEventListener('click', function () {

    const email = document.getElementById('user-email');
    const userEmail = email.value;

    const pemail = document.getElementById('user-password');
    const userp = pemail.value;

    if (userEmail == 'abcd@gamil.com' && userp == 'hasan123') {
        window.location.href = 'banking.html';
    }

})
