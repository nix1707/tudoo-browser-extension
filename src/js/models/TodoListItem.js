export class TodoListItem {
  constructor(title, description, priority, date) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.date = date;
    this.isCompleted = false;
  }
}
