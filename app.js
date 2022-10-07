const reset_btn = document.querySelector(".btn_reset");
const input_bill = document.querySelector(".dollar");
const input_people = document.querySelector(".person");
const input_custom = document.querySelector(".custom");
const result_amount = document.querySelector(".h2_amount");
const result_total = document.querySelector(".h2_total");
const info = document.querySelector(".alert");
const btn_5 = document.querySelector(".tip5");
const btn_10 = document.querySelector(".tip10");
const btn_15 = document.querySelector(".tip15");
const btn_25 = document.querySelector(".tip25");
const btn_50 = document.querySelector(".tip50");
let tipChosen = '';

btn_5.addEventListener('click', function () {
    tipChosen = 5;
    add_number();
});

btn_10.addEventListener("click", () => {
    tipChosen = 10;
    add_number();
});

btn_15.addEventListener("click", () => {
    tipChosen = 15;
    add_number();
});

btn_25.addEventListener("click", () => {
    tipChosen = 25;
    add_number();
});

btn_50.addEventListener("click", () => {
    tipChosen = 50;
    add_number();
});

input_custom.addEventListener('input', function (event) {
    tipChosen = event.target.value;
    add_number();
})

function add_number() {
    let first_number = parseFloat(input_bill.value);
    let second_number = parseFloat(input_people.value);
    if (first_number > 0 || second_number > 0) {
        reset_btn.disabled = false;
    }

    if(second_number == 0)
    {
        info.classList.add("active");
        input_people.classList.add("fail");
    }
    else
    {
        info.classList.remove("active");
        input_people.classList.remove("fail");
    }

    var tipResult = ((Number(first_number) * (Number(tipChosen) / 100)) / Number(second_number));
    tipResult = (Math.round(tipResult * 100) / 100).toFixed(2);

    var totalResult = (Number(first_number) / Number(second_number)) + Number(tipResult);
    totalResult = (Math.round(totalResult * 100) / 100).toFixed(2);

    document.querySelector(".h2_total").innerHTML = "$" + totalResult;
    document.querySelector(".h2_amount").innerHTML = "$" + tipResult;
}

reset_btn.addEventListener("click", reset);

function reset() {
    input_custom.value = '';
    input_bill.value = '';
    input_people.value = '';
    result_total.innerHTML = "$0.00";
    result_amount.innerHTML = "$0.00";
    reset_btn.disabled = true;
}