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

/// TEXTO

const valText = (nameInput) => {
    var regEx =
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    var validText = regEx.test(nameInput.value);

    if (nameInput.value.length < 1) {
        nameInput.parentNode
            .querySelector(".error-input")
            .classList.add("show");
    } else {
        nameInput.parentNode
            .querySelector(".error-input")
            .classList.remove("show");

        if (!validText) {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.add("show");
            nameInput.parentNode.querySelector(".error-input").innerText =
                "Solo se permiten letras";
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

/// NUMEROS

const valNum = (nameInput) => {
    if (nameInput.value.length < 1) {
        nameInput.parentNode
            .querySelector(".error-input")
            .classList.add("show");
    } else {
        var regEx = /^[0-9]+$/;
        var validEmail = regEx.test(nameInput.value);

        if (!validEmail) {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.add("show");
            nameInput.parentNode.querySelector(".error-input").innerText =
                "Solo se permiten números";
        } else {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.remove("show");
        }
    }
};

const validarFormRegistro = () => {
    const formRegistro = document.querySelector(".form-registro"),
        btnRegistro = document.querySelector("#btn-registro"),
        inputRegisterName = document.querySelector("#registerName"),
        inputTienda = document.querySelector("#tienda"),
        inputTelefono = document.querySelector("#telefono"),
        inputEmpleado = document.querySelector("#empleado"),
        inputRegisterEmail = document.querySelector("#registerEmail"),
        inputRegisterPass = document.querySelector("#registerPass");

    btnRegistro.onclick = () => {
        valText(inputRegisterName);
        valTextNum(inputTienda);
        valNum(inputTelefono);
        valNum(inputEmpleado);
        valMail(inputRegisterEmail);
        valTextNum(inputRegisterPass);
        let msjsError = document.querySelectorAll(".error-input.show");
        if (msjsError.length == 0) {
            formRegistro.submit();
            console.log("si");
            return true;
        } else {
            console.log("no");
            return false;
        }
    };
};

validarFormRegistro();
