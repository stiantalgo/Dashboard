const weekly = document.querySelector('.weekly');
const ingredientAdd = document.querySelector('.ingredientAdd');
const dishAdd = document.querySelector('.dishAdd');
const addPage = document.querySelector('.addPage');

ingredientAdd.addEventListener("click", () => {

    addPage.style.display = "block";
    document.querySelector('.ingredient').classList.toggle("selectedDiv");

})

dishAdd.addEventListener("click", () => {

    document.querySelector('.dishPage').classList.toggle("selectedDiv");

})

weekly.addEventListener("click", () => {

    document.querySelector('.weeklyPage').classList.toggle("selectedDiv");

})

