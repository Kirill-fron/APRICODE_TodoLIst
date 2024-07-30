import { RxActivityLog, RxAlignCenterHorizontally } from "react-icons/rx";
import MainBLock from "./components/MainBLock";

import { observer } from "mobx-react-lite";
import { useStore } from "./hooks/useStore";

import { useState } from "react";
import style from "./styles/index.module.css";

const App = observer(() => {
  const { todoStore } = useStore();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e: any) => {
    e.preventDefault();
    todoStore.addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <section className={style["todo-list"]}>
      <nav className={style["todo-list__container"]}>
        <main className={style["todo-list__column"]}>
          <div className={style["todo-list__content"]}>
            <header className={style["todo-list__header"]}>
              <RxActivityLog className={style["todo-list__icon"]} />
              <h1 className={style["todo-list__title"]}>Все задачи</h1>
            </header>
            <form onSubmit={handleAddTodo}>
              <input
              className={style["todo-input"]}
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Новая задача"
              />
              <button className={style["todo-list__add-category"]}>
                <RxAlignCenterHorizontally
                  className={style["todo-list__add-icon"]}
                />
                <span className={style["todo-list__add-text"]}>
                  Добавить папку 
                </span>
              </button>
            </form>
            <ul className={style["todo-list__categories"]}>
              {todoStore.todos.map((todo: any, index: any) => (
                <li className={style["todo-list__category"]} key={index}>
                  <span className={style["todo-list__category-icon"]} />
                  <span className={style["todo-list__category-name"]}>
                    {todo}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <MainBLock />
      </nav>
    </section>
  );
});

export default App;
