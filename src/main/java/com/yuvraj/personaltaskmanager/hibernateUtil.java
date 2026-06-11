package com.yuvraj.personaltaskmanager;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class hibernateUtil {
        private static SessionFactory factory=
                new Configuration()
                        .configure()
                        .addAnnotatedClass(Task.class)
                        .buildSessionFactory();

        public static SessionFactory getFactory(){
            return factory;
        }
}

