var submenuItems = document.querySelectorAll(".has-submenu");

// Добавляем обработчик события для каждого элемента
submenuItems.forEach(function (item) {
    item.addEventListener("click", function (e) {


        // Переключаем видимость подменю для текущего элемента
        var submenu = item.querySelector(".submenu");
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Находим элементы формы и результат
    var form = document.getElementById("myForm");
    var input = document.getElementById("myInput");
    var input1 = document.getElementById("myInput1");
    var result = document.getElementById("result");

    // Добавляем обработчик события для кнопки
    document.getElementById("myButton").addEventListener("click", function () {
        // Получаем значение из поля ввода
        var inputValue = input.value;
        var input1Value = input1.value;

        // Здесь вы можете написать свою логику проверки валидности
        if ((isValid(inputValue)) && (isValid(input1Value))) {
            alert("Проверьте почту, вам выслали приглашение на рассылку.")
        } else {
            alert("Данные не валидны.")
        }
    });

    // Функция для проверки валидности
    function isValid(value) {

        return value.trim() !== "";
    }
});

const open = document.getElementById('open');
const person_container = document.getElementById('person_container');
const close = document.getElementById('close');
const close_1 = document.getElementById('close_1');

open.addEventListener('click', () => {
    person_container.classList.add('show');
});

close.addEventListener('click', () => {
    person_container.classList.remove('show');
});

close_1.addEventListener('click', () => {
    person_container.classList.remove('show');
});

const open_1 = document.getElementById('open_1');
const open_2 = document.getElementById('open_2');
const open_3 = document.getElementById('open_3');

open_2.addEventListener('click', () => {
    document.getElementById('sect_1_product_main_1').style.display = 'none';
    document.getElementById('sect_1_product_main').style.display = 'Block';
    document.getElementById('sect_1_product_main_3').style.display = 'none';
    document.getElementById('open_2').style.color = '#363636';
    document.getElementById('open_3').style.color = '#CCC';
    document.getElementById('open_1').style.color = '#CCC';
});

open_1.addEventListener('click', () => {
    document.getElementById('sect_1_product_main_1').style.display = 'Block';
    document.getElementById('sect_1_product_main').style.display = 'none';
    document.getElementById('sect_1_product_main_3').style.display = 'none';
    document.getElementById('open_1').style.color = '#363636';
    document.getElementById('open_3').style.color = '#CCC';
    document.getElementById('open_2').style.color = '#CCC';
});

open_3.addEventListener('click', () => {
    document.getElementById('sect_1_product_main_1').style.display = 'none';
    document.getElementById('sect_1_product_main').style.display = 'none';
    document.getElementById('sect_1_product_main_3').style.display = 'Block';
    document.getElementById('open_3').style.color = '#363636';
    document.getElementById('open_2').style.color = '#CCC';
    document.getElementById('open_1').style.color = '#CCC';
})

const input_3 = document.getElementById('input_3');
const input_4 = document.getElementById('input_4');
const input_5 = document.getElementById('input_5');
const input_6 = document.getElementById('input_6');


document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".cart-total");
    const cartContent = document.querySelector(".cart-content");
    const message = document.querySelector(".message");
    const buyButton = document.querySelector(".buy-button");

    let cart = [];

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (cart.length < maxItemsInCart) { // Проверка на максимальное количество
                const name = button.getAttribute("data-name");
                const price = parseFloat(button.getAttribute("data-price"));
                const imgSrc = button.getAttribute("data-img");

                const item = {
                    name,
                    price,
                    imgSrc,
                };

                cart.push(item);
                updateCart();
            } else {
                alert("Вы не можете добавить больше " + maxItemsInCart + " товаров в корзину.");
            }
        });
    });

    cartItemsList.addEventListener("click", (e) => {
        if (e.target.classList.contains("cart-item-remove")) {
            const itemName = e.target.getAttribute("data-name");
            removeItemFromCart(itemName);
            updateCart();
        }
    });

    document.getElementById("myButton_1").addEventListener("click", function () {
        // Получаем значение из полей ввода
        var inputValue_1 = input_3.value;
        var input1Value_1 = input_4.value;
        var input2Value_1 = input_5.value;
        var input3Value_1 = input_6.value;

        function isValid(value) {
            return value.trim() !== "";
        }

        // Здесь вы можете написать свою логику проверки валидности
        if (isValid(inputValue_1) && isValid(input1Value_1) && isValid(input2Value_1) && isValid(input3Value_1)) {
            // Если данные валидны, выполняем код кнопки buyButton
            const total = calculateTotal();
            alert(`Спасибо за покупку на сумму: ${total.toFixed(2)} руб!`);
            clearCart();
            updateCart();
        } else {
            alert("Проверьте введенные данные!");
        }
    });


    function updateCart() {
        cartItemsList.innerHTML = "";
        let total = 0;

        cart.forEach((item) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.imgSrc}" alt="${item.name}">
                <div>
                    <span>${item.name}</span>
                    <span>${item.price.toFixed(2)}р.</span>
                    <span class="cart-item-remove" data-name="${item.name}">Удалить</span>
                </div>
            `;
            cartItemsList.appendChild(cartItem);

            total += item.price;

        });

        cartTotal.textContent = `Итого: ${total.toFixed(2)}`;
    }

    function removeItemFromCart(itemName) {
        cart = cart.filter((item) => item.name !== itemName);
    }
    function calculateTotal() {
        return cart.reduce((total, item) => total + item.price, 0);
    }


    function clearCart() {
        cart = [];
    }
});

let maxItemsInCart = 5;

function changeItem() {
    document.getElementById('color-1').style.color= 'red';
}
function rechangeItem() {
    document.getElementById('color-1').style.color = '#363636';
}


    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
    center: [55.652540, 37.691617],  // Координаты центра карты
    zoom: 9 // Уровень масштабирования
});

    var myPlacemark = new ymaps.Placemark([55.652540, 37.691617], {
    hintContent: 'Москва!',
    balloonContent: 'Столица России'
});

    myMap.geoObjects.add(myPlacemark);
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    searchInput.addEventListener('input', function () {
        // Очищаем контейнер с результатами поиска
        searchResults.innerHTML = '';
        // Получаем введенный пользователем запрос
        const query = searchInput.value.trim().toLowerCase();
        const saln = 'Комплект сальников ✔';
        const bag = 'Рюкзак туристический ✔';
        const vesi = 'Весы электронные ✘';
        const plastilin = 'Пластилин ✔';
        const osnastka = 'Набор оснастки ✘';
        const furniture = 'Набор мебели ✔';
        const costume = 'Летний костюм ✘';
        const activator = 'Активатор ✔';
        const sadok = 'Садок 4 колеца ✔';
        const blesna = 'Умная блесна ✔';
        const smallBag = 'Сумка EVA ✔';
        const termos = 'Термос Тайган ✔';
        const stopora = 'Стопора рыболовные ✘';
        const svetlychki = 'Светлячки ✔';
        const binokl = 'Охотничий бинокль ✔';
        const rashiritel = 'Расширитель-Зевник ✔';
        const leska = 'Флюоро-ая леска ✘';
        const helpshit = 'Спасательные шипы ✔';
        const signalizator = 'Сигн-тор поклевки ✘';
        const bistro = 'Быстр-имые пакеты ✔';
        const vobler = 'Воблер - наживка ✘';
        const btn_1 = document.getElementById("btn_1");
        // Массив для примера данных, которые можно искать
        const data_1 = [
            saln,
            bag,
            vesi,
            plastilin,
            osnastka,
            furniture,
            costume,
            activator,
            sadok,
            blesna,
            smallBag,
            termos,
            stopora,
            svetlychki,
            binokl,
            rashiritel,
            leska,
            helpshit,
            signalizator,
            bistro,
            vobler,
        ]


        // Выполняем поиск в массиве данных
        const results = data_1.filter(item => item.toLowerCase().includes(query));

        // Отображаем результаты поиска
        results.forEach(result => {
            const resultElement = document.createElement('div');

            // Создаем элемент для иконки
            const iconElement = document.createElement('img');
            iconElement.src = '../images/header/search.svg'; // Путь к иконке (замените на свой)
            iconElement.alt = 'Search Icon';
            iconElement.className = 'search-result-icon';

            // Создаем элемент для текста результата
            const textElement = document.createElement('span');
            textElement.textContent = result;

            // Добавляем иконку и текст в элемент результата
            resultElement.appendChild(iconElement);
            resultElement.appendChild(textElement);
            resultElement.className = 'search-result-icon_1';

// Добавляем обработчик события blur для поля ввода
            searchInput.addEventListener('blur', function () {
                // Очищаем контейнер с результатами поиска при потере фокуса
                searchResults.innerHTML = '';
            });

            // Добавляем элемент результата в контейнер
            searchResults.appendChild(resultElement);

        });
    });
});

