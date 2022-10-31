/// EMAIL

const valMail = (nameInput) => {
    if (nameInput.value.length < 1) {
        nameInput.parentNode
            .querySelector(".error-input")
            .classList.add("show");
    } else {
        var regEx =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var validNumbre = regEx.test(nameInput.value);
        if (!validNumbre) {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.add("show");
            nameInput.parentNode.querySelector(".error-input").innerText =
                "Verifica el formato de email ";
        } else {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.remove("show");
        }
    }
};

/// TEXTO Y NUMERO

const valTextNum = (nameInput) => {
    if (nameInput.value.length < 1) {
        nameInput.parentNode
            .querySelector(".error-input")
            .classList.add("show");
    } else {
        // nameInput.siblings(".error-input").remove();
        var regEx = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
        var validText = regEx.test(nameInput.value);

        if (!validText) {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.add("show");
            nameInput.parentNode.querySelector(".error-input").innerText =
                "No se permiten caracteres especiales";
        } else {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.remove("show");
        }
    }
};

const validarForm = () => {
    const formLogin = document.querySelector(".form-login"),
        btnLogin = document.querySelector("#btn-login"),
        inputEmailLog = document.querySelector("#loginEmail"),
        inputPassLog = document.querySelector("#loginPass");

    btnLogin.onclick = () => {
        valMail(inputEmailLog);
        valTextNum(inputPassLog);

        let msjsError = document.querySelectorAll(".error-input.show");

        if (msjsError.length == 0) {
            formLogin.submit();
            console.log("si");
            return true;
        } else {
            console.log("no");
            return false;
        }
    };
};

validarForm();
