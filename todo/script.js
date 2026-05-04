// Todo List with Local Storage functionality

// Load tasks from local storage
function loadTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Save tasks to local storage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add new task
function addTask(task) {
    const tasks = loadTasks();
    tasks.push({ task, completed: false });
    saveTasks(tasks);
}

// Delete a task
function deleteTask(index) {
    const tasks = loadTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
}

// Edit a task
function editTask(index, newTask) {
    const tasks = loadTasks();
    tasks[index].task = newTask;
    saveTasks(tasks);
}

// Complete a task
function completeTask(index) {
    const tasks = loadTasks();
    tasks[index].completed = true;
    saveTasks(tasks);
}

// Filter tasks based on completion status
function filterTasks(status) {
    const tasks = loadTasks();
    return tasks.filter(task => task.completed === status);
}

// Get task statistics
function getStatistics() {
    const tasks = loadTasks();
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const remainingTasks = totalTasks - completedTasks;
    
    return {
        total: totalTasks,
        completed: completedTasks,
        remaining: remainingTasks
    };
}