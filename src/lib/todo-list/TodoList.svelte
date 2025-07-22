<script>
  import ItemForm from "../ItemForm.svelte";
  import { icons } from "../../assets/icons";
  import { todoItems, todoList } from "../../js/todoList";
  import { priorityMap } from "../../js/priorityMap";
  import Progress from "./Progress.svelte";
  import Placeholder from "./Placeholder.svelte";

  let isFormVisible = $state(false);
  let editItem = $state(null);

  const toggleForm = () => {
    if (isFormVisible) editItem = null;

    isFormVisible = !isFormVisible;
  };
</script>

<ul class="todo-list">
  {#if isFormVisible}
    <ItemForm {toggleForm} {editItem} />
  {:else}
    <button
      class="add-item-button"
      onclick={() => {
        toggleForm();
      }}
    >
      <img src={icons.add} alt="add" />
      Add item
    </button>
  {/if}

  {#if $todoItems.length > 0}
    {#if isFormVisible === false}
      <Progress />
    {/if}
    {#each $todoItems as task}
      <li class={`todo-list__item ${task.isCompleted && "completed"}`}>
        <input
          type="checkbox"
          name="completed"
          checked={task.isCompleted}
          onclick={() =>
            todoList.editItem(task.id, {
              isCompleted: !task.isCompleted,
            })}
        />
        <div class="item-info">
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <div class="item-meta">
            <span class="item-date">
              <img src={icons.calendar} alt="calendar" />
              Due {new Date(task.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
            <span
              style={`color:${priorityMap[task.priority].color}; border-color: ${priorityMap[task.priority].color};`}
              class="item-priority"
            >
              <img
                src={priorityMap[task.priority].icon}
                alt="flag"
              />{priorityMap[task.priority].title}
            </span>
          </div>
        </div>
        <div
          class="item__buttons"
          style={`${isFormVisible && "visibility: hidden;"}`}
        >
          <button
            class="item-button__edit"
            onclick={() => {
              editItem = { ...task };
              toggleForm();
            }}
          >
            <img src={icons.edit} alt="edit" />
          </button>
          <button
            onclick={() => todoList.removeItem(task.id)}
            class="item-button__delete"
          >
            <img src={icons.remove} alt="remove" />
          </button>
        </div>
      </li>
    {/each}
  {:else if isFormVisible === false}
    <Placeholder />
  {/if}
</ul>
