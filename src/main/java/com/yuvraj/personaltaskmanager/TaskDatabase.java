package com.yuvraj.personaltaskmanager;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class TaskDatabase {

    public void insertTask(Task task){
        Session session=hibernateUtil.getFactory().openSession();
        Transaction tx=session.beginTransaction();
        session.persist(task);
        tx.commit();
        session.close();
    }
    public List<Task> getAllTasks(){
        Session session=hibernateUtil.getFactory().openSession();
        List<Task>tasks=
                session.createQuery(
                        "from Task",
                        Task.class
                ).list();
        session.close();
        return tasks;
    }
    public Task getTask(int id)
    {
        Session session=hibernateUtil.getFactory().openSession();
        Task task=session.find(Task.class,id);
        session.close();
        return task;
    }
    public void deleteTask(int id){
        Session session=hibernateUtil.getFactory().openSession();
        Transaction tx=session.beginTransaction();
        Task task=session.find(Task.class,id);
        session.remove(task);
        tx.commit();
        session.close();
    }
    public void updateTask(Task updatedTask){
        Session session=hibernateUtil.getFactory().openSession();
        Transaction tx=session.beginTransaction();
        session.merge(updatedTask);
        tx.commit();
        session.close();
    }
}
