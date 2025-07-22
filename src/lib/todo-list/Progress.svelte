<script>
    import { todoItems } from "../../js/todoList";
</script>

<div class="progress-container">
  <div class="progress-bar">
    <div
      class="progress-bar__fill"
      style="width: {Math.round(
        ($todoItems.filter((item) => item.isCompleted).length /
          $todoItems.length) *
          100
      )}%;"
    ></div>
  </div>
  <p class="progress-text">
    {$todoItems.filter((item) => item.isCompleted).length}
    of
    {$todoItems.length}
    completed
  </p>
</div>
