

const wrapper = document.querySelector('.wrapper'),
    form = wrapper.querySelectorAll('.form'),
    submitInput = form[0].querySelector('input[type="submit"]');

function getDataForm(e) {
    e.preventDefault();

    let formData = new FormData(form[0]);
    alert(formData.get('nameFied') + ' Your massage is sent as ' + formData.get('emailFied') + ' - ' + formData.get('massageField'));
}

document.addEventListener('DOMContentLoaded', function () {
    submitInput.addEventListener('click', getDataForm, false);
}, false);






// const myHeader = document.querySelector('.my-header');
// const myPara = document.querySelector('.my-para');

// const tl = new TimelineMax();
// tl.fromTo(my-header,1, {left: "0%"}, {left: '80%'})








