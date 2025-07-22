<script>
  import { TodoListItem } from "../js/models/TodoListItem";
  import { priorityMap } from "../js/priorityMap";
  import { todoList } from "../js/todoList";

  let { toggleForm, editItem = null } = $props();

  let form = $state({
    title: editItem?.title || "",
    description: editItem?.description || "",
    priority: editItem?.priority || 0,
    date: editItem?.date || new Date().toISOString().split("T")[0],
  });

  const setPriority = (p) => {
    form.priority = p;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editItem
      ? todoList.editItem(editItem.id, { ...form })
      : todoList.addItem(
          new TodoListItem(
            form.title,
            form.description,
            form.priority,
            form.date
          )
        );
    toggleForm();
  };
</script>

<form class="item-form" onsubmit={handleSubmit}>
  <input
    bind:value={form.title}
    type="text"
    required
    placeholder="Enter title (Required)..."
  />
  <textarea
    rows="3"
    bind:value={form.description}
    name="description"
    placeholder="Enter description (Optional)..."
  ></textarea>
  <div class="metadata-input">
    <div class="priority-select">
      <span> Priority: </span>
      <button
        type="button"
        onclick={() => setPriority(0)}
        class={`priority-select__item ${form.priority === 0 ? "active-priority" : ""}`}
      >
        <img src={priorityMap[0].icon} alt="priority-0" />
      </button>
      <button
        type="button"
        onclick={() => setPriority(1)}
        class={`priority-select__item ${form.priority === 1 ? "active-priority" : ""}`}
      >
        <img src={priorityMap[1].icon} alt="priority-1" />
      </button>
      <button
        type="button"
        onclick={() => setPriority(2)}
        class={`priority-select__item ${form.priority === 2 ? "active-priority" : ""}`}
      >
        <img src={priorityMap[2].icon} alt="priority-2" />
      </button>
    </div>
    <input type="date" bind:value={form.date} required />
  </div>
  <div class="item-form__buttons">
    <button type="button" class="button-cancel" onclick={toggleForm}>
      Cancel
    </button>
    <button type="submit" class="button-done">Done</button>
  </div>
</form>
