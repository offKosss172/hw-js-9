/*
Теоретичні питання
1. Опишіть, як можна створити новий HTML тег на сторінці.
пример из моих прошліх курсов)

let enemy2 = document.createElement("div"); /// переменная = добавляем єлемент в моем случае это див
		enemy2.className = "enemy type-2"; // даем класс энеми, в этом конкретном случае класс уже был прописан заранее в цсс с корами
         что создать и в этом случае лефт уже задоно, а топ задаем ниже 

		enemy2.style.top = random(100, document.querySelector("#app").clientHeight - 200) + "px";  ///рамдовно по высоте экрана появляется этот элемент
							
	game.appendChild(enemy2);     //поле где? на игровом поле(задано выше).фунция что сделать? появиться (кому?) врагу (используем скрытую переменную созданную выше)


-вопрос к вм, Максим, норм что такой пример использую? или лучше просто писать без такого примера из реального проекта?

2. Опишіть, що означає перший параметр функції insertAdjacentHTML і опишіть можливі варіанти цього параметра.
'beforebegin': Вставляет HTML-перед елементом.
'afterbegin': Вставляет HTML-код в середину елемента, після открывающего тега.
'beforeend': Вставляет HTML-код в середину елемента, відразу перед закрывающим тегом.
'afterend': Вставляет HTML-код после елемента.


3. Як можна видалити елемент зі сторінки?
с помощью функции remove() ghbvth^
enemy2.remove() // удаляем ранее єлемент




Завдання
*/
function printList(array, parent = document.body) {
    const ul = document.createElement("ul");
    parent.appendChild(ul);
  
    array.forEach((item) => {
      const li = document.createElement("li");
      li.innerText = item;
      ul.appendChild(li);
    });
  }

  const array1 = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
  printList(array1);

  const array2 = ["1", "2", "3", "sea", "user", 23];
const parentElement = document.getElementById("my-list");
printList(array2, parentElement);
