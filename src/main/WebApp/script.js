const API_URL = "http://localhost:8084/PersonalTaskManager_war_exploded/api/tasks";

document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
});

async function loadTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "<p>Loading tasks...</p>";

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("GET failed: " + response.status);
        }

        const tasks = await response.json();

        taskList.innerHTML = "";

        if (!tasks || tasks.length === 0) {
            taskList.innerHTML = "<p>No tasks found.</p>";
            return;
        }

        tasks.forEach(task => {
            const statusClass = (task.status || "").replace(/\s/g, "");
            const priorityClass = task.priority || "";

            taskList.innerHTML += `
                <div class="task-card">
                    <h3>${task.title}</h3>
                    <p class="description">${task.description}</p>

                    <span class="badge ${statusClass}">${task.status}</span>
                    <span class="badge ${priorityClass}">${task.priority}</span>

                    <div class="actions">
                        <button class="edit-btn" onclick='editTask(${JSON.stringify(task)})'>Edit</button>
                        <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
                    </div>
                </div>
            `;
        });

    } catch (error) {
        console.error("Load error:", error);
        taskList.innerHTML = "<p>Backend not connected or API error.</p>";
    }
}

async function saveTask() {
    const task = {
        title: document.getElementById("title").value.trim(),
        description: document.getElementById("description").value.trim(),
        status: document.getElementById("status").value,
        priority: document.getElementById("priority").value
    };

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });

    const text = await response.text();

    console.log("Status:", response.status);
    console.log("Response:", text);

    if (!response.ok) {
        alert("POST failed. Status: " + response.status);
        return;
    }

    resetForm();
    loadTasks();
}

function editTask(task) {
    document.getElementById("taskId").value = task.id;
    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;
    document.getElementById("status").value = task.status;
    document.getElementById("priority").value = task.priority;

    document.getElementById("formTitle").innerText = "Update Task";
    document.getElementById("saveBtn").innerText = "Update Task";
}

async function deleteTask(id) {
    if (!confirm("Are you sure you want to delete this task?")) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            alert("Task was not deleted.");
            return;
        }

        await loadTasks();

    } catch (error) {
        console.error("Delete error:", error);
        alert("Delete request failed.");
    }
}

function resetForm() {
    document.getElementById("taskId").value = "";
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("status").value = "Pending";
    document.getElementById("priority").value = "Low";

    document.getElementById("formTitle").innerText = "Add New Task";
    document.getElementById("saveBtn").innerText = "Add Task";
}