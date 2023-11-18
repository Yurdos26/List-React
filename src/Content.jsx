// import React, { useState } from "react"; //добавляем хук {useState}
import React from "react";
// import { FaTrashAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

const Content = ({ items, setItems, handleCheck, handleDelete }) => {
  // const [items, setItems] = useState(
  //   // Если что то хранится в localStorage, то отображается , если ничего не хранится , то обображается пусто
  //   JSON.parse(localStorage.getItem("todolist")) || []
  //   //инициализируем useStateSnipet и запишем массив
  //   {
  //     id: 1,
  //     checked: false,
  //     item: "One half-1",
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     item: "Two half-2",
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     item: "Three half-3",
  //   },
  // ]
  // );
  //   console.log(items);

  // создаём функцию, которая будет фиксировать галочки
  // const handleCheck = (id) => {
  //   // console.log(`key ${id}`);
  //   //выполним установку галочек:
  //   //функция меняет состояние с false на true и наоборот при выборе
  //   const listitems = items.map((item) =>
  //     item.id === id ? { ...item, checked: !item.checked } : item
  //   );
  //   setItems(listitems);
  //   //Сделает так, чтобы данные о состоянии записей сохранялись в браузере localStorage
  //   localStorage.setItem("todolist", JSON.stringify(listitems));
  // };
  // удаляем позиции, путём нажатия на корзину
  // const handleDelete = (id) => {
  //   const listitems = items.filter((item) => item.id !== id);
  //   setItems(listitems);
  //   localStorage.setItem("todolist", JSON.stringify(listitems))
  // };

  return (
    <>
      {items.length ? (
        // проверка есть ли какие-то записи?
        <ul>
          {items.map((item) => (
            // map выбирает всё из массива и распределяет по странице
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                //реагирование на постановку галочки
                onChange={() => handleCheck(item.id)}
              />
              <label
                // при отметке текст зачеркивается
                style={item.checked ? { textDecoration: "line-through" } : null}
                // при двойном щелчке также отмечается галочка
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              {/* иконка справа на удаление записи из списка */}
              <TiDelete
                role="button"
                tabIndex="0"
                //реагирование на удаление галочки
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        // если записи все удалены, то выводим сообщение:
        <p
          style={{
            fontSize: "35px",
            marginTop: "150px",
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Список пуст!
        </p>
      )}
    </>
  );
};

export default Content;
