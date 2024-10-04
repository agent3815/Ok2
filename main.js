function AddName(element) {
    var name = element.name.value;

    // Получение выбранного пола
    var genderElements = element.gender;
    var gender = '';
    for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
            break;
        }
    }

    console.log(name, gender);

    if (name && gender) {
        // Перенаправляем на другую страницу
        window.location.href = 'ok/teacher_day.html';
        localStorage.setItem("userName", name);
        localStorage.setItem("userGender", gender);
    } else {
        alert("Пожалуйста, введите имя и выберите пол.");
    }


    // Предотвращаем отправку формы и перезагрузку страницы
    return false;
}
