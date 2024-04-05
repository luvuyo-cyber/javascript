function fetchTasks() {
    return new Promise((resolve, reject) => {
        try {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            resolve(tasks);
        } catch (error) {
            reject('Error fetching tasks');
        }
    });
}

function saveTasks(tasks) {
    return new Promise((resolve, reject) => {
        try {
            localStorage.setItem('tasks', JSON.stringify(tasks));
            resolve('Tasks saved successfully');
        } catch (error) {
            reject('Error saving tasks');
        }
    });
}

function toggleTaskCompletion(taskId, completed) {
    return new Promise((resolve, reject) => {
        fetchTasks()
            .then(tasks => {
                const updatedTasks = tasks.map(task =>
                    task.id === taskId ? { ...task, completed } : task
                );
                return saveTasks(updatedTasks);
            })
            .then(() => resolve('Task completion status updated'))
            .catch(error => reject(error));
    });
}


function renderTasks() {
    fetchTasks()
        .then(tasks => {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = '';

            tasks.forEach(task => {
                const li = document.createElement('li');

                const checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.checked = task.completed;
                checkbox.addEventListener('change', () => {
                    toggleTaskCompletion(task.id, checkbox.checked)
                        .then(() => renderTasks())
                        .catch(error => console.error(error));
                });


                const label = document.createElement('label');
                label.textContent = task.title;
                label.classList.add('task-label');
                if (task.completed) {
                    label.classList.add('completed-task');
                }


                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.classList.add('delete-btn');
                deleteBtn.addEventListener('click', () => {
                    deleteTask(task.id)
                        .then(() => renderTasks())
                        .catch(error => console.error(error));
                });

                li.appendChild(checkbox);
                li.appendChild(label);
                li.appendChild(deleteBtn);
                taskList.appendChild(li);
            });
        })
        .catch(error => console.error(error));
}


function addTask(taskTitle) {
    fetchTasks()
        .then(tasks => {
            const newTask = { id: Date.now(), title: taskTitle, completed: false };
            tasks.push(newTask);
            return saveTasks(tasks);
        })
        .then(() => renderTasks())
        .catch(error => console.error(error));
}


function deleteTask(taskId) {
    return new Promise((resolve, reject) => {
        fetchTasks()
            .then(tasks => {
                const updatedTasks = tasks.filter(task => task.id !== taskId);
                return saveTasks(updatedTasks);
            })
            .then(() => resolve('Task deleted successfully'))
            .catch(error => reject(error));
    });
}


document.getElementById('addTaskBtn').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskTitle = taskInput.value.trim();
    if (taskTitle) {
        addTask(taskTitle);
        taskInput.value = '';
    }
});


renderTasks();
