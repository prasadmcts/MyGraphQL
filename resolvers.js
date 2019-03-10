const db = require('./db')

const Query = {
    test: () => 'Test Success, GraphQL server is up & running !!',
    greeting:() => {
        return "hello, How are you !!!"
    },
    sayHello:(root,args,context,info) => `Hi ${args.name} GraphQL server says Hello to you!!`,
    students:() => db.students.list(),
    studentById:(root,args,context,info) => {
        return db.students.get(args.id); //args will contain parameter passed in query
    },
}

const Student = {
    fullName:(root,args,context,info) => {
       return root.firstName+":"+root.lastName;
    },
    college:(root) => {
       return db.colleges.get(root.collegeId);
    }
 }
 
 module.exports = {Query,Student}