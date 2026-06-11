//Reatapi

package com.yuvraj.personaltaskmanager;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@Path("/tasks")
public class TaskResource {

    TaskDatabase taskdb=new TaskDatabase();

    //get all tasks
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Task> getTasks(){
        return taskdb.getAllTasks();
    }

    //get single task
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Task getTasks(@PathParam("id") int id){
        return taskdb.getTask(id);
    }

    //create task

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Task addTask(Task task){
        System.out.println(task);
        taskdb.insertTask(task);
        return task;
    }

    //delete task
    @DELETE
    @Path("/{id}")
    public String delete(@PathParam("id")int id){
        taskdb.deleteTask(id);
        return "Task removed sucessfully";
    }

    //update task
    @PUT
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String updateTasks(@PathParam("id")int id,Task updatedtask){
        updatedtask.setId(id);
        taskdb.updateTask(updatedtask);
        return "Task updated sucessfully";
    }
}