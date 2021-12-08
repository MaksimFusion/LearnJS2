// задача 2: Сделать инпут который при потере фокуса выдает alert "ждем возвращения"
let input = document.getElementById("input");
input.onblur = function() {
    alert("ждем возвращения")
};

/*задача 3: Сделать поле ввода с кнопкой,
 при нажатии на которую текст из инпута появляется в кнопке,
 дефолтный текст кнопки "опубликовать"*/

let textInput = document.getElementById("inputText");
textInput.addEventListener('oninput', function (){

})

const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    btn.value = textInput.value;
})
