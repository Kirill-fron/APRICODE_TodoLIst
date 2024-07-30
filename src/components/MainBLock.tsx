import {
  RxAlignCenterHorizontally,
  RxCheck,
  RxCrosshair2,
} from "react-icons/rx";

import { observer } from "mobx-react-lite";
import { taskStore } from "../store/TodoStore";
import { useState } from "react";
import style from "../styles/block.module.css";

const MainBLock = observer(() => {
  const [newTask, setNewTask] = useState("");
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      taskStore.addTask(newTask);
      setNewTask("");
    }
  };

  const handleTitleEdit = (e) => {
    if (e.key === "Enter") {
      taskStore.updateTitle(e.target.value);
      setIsEditingTitle(false);
    }
  };

  return (
    <section className={style["task-list"]}>
      <div className={style["task-list__container"]}>
        <div className={style["task-list__divider"]}></div>
        <div className={style["task-list__content"]}>
          <header className={style["task-list__header"]}>
            {isEditingTitle ? (
              <input
                type="text"
                defaultValue={taskStore.title}
                onKeyPress={handleTitleEdit}
                onBlur={() => setIsEditingTitle(false)}
                autoFocus
              />
            ) : (
              <h2
                className={style["task-list__title"]}
                onClick={() => setIsEditingTitle(true)}
              >
                {taskStore.title}
              </h2>
            )}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b019ec9563bdbc923e930bc8ebe801fbc0301d5350916f1fc52df48029e31c62?apiKey=237bdc947ea641029dc710c0a8f395df&&apiKey=237bdc947ea641029dc710c0a8f395df"
              className={style["task-list__header-icon"]}
              alt="Frontend icon"
            />
          </header>
          <hr className={style["task-list__separator"]} />
          <ul className={style["task-list__items"]}>
            {taskStore.tasks.map((task) => (
              <li key={task.id} className={style["task-list__item"]}>
                <span
                  className={style["task-list__checkbox"]}
                  onClick={() => taskStore.toggleTask(task.id)}
                  style={{
                    backgroundColor: task.completed ? "#4CAF50" : "transparent",
                  }}
                ></span>
                <span className={style["task-list__task-text"]}>
                  {task.text}
                </span>
                <RxCrosshair2 className={style["task-list__action-icon"]} />
              </li>
            ))}
          </ul>
          <form
            onSubmit={handleAddTask}
            className={style["task-list__add-task"]}
          >
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Новая задача"
              className={style["task-list__input"]}
            />
            <button type="submit" className={style["task-list__add-button"]}>
              <RxAlignCenterHorizontally
                className={style["todo-list__add-icon"]}
              />
              <span className={style["task-list__add-text"]}>Добавить</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default MainBLock;
