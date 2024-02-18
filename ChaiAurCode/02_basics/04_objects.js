const tinderUser = new Object() 
// const tinderUser = {}
tinderUser.id = "1236"
tinderUser.name ="dhairya"
tinderUser.IsLoggedIn =  true
//console.log(tinderUser);
const regularUser = {
    email:"some@gamail.com",
    fullname :{
        username :{
            firstname : "dhairya",
            lastname : "joshi"
        }
    }
}
// destructure
const course = {
    courseName :'jscourse',
    courseId: "how are you",
    coursePrice : '499',
    courseInstructor : 'dhairya joshi'

} 
//course.courseInstructor
const {courseId :id} = course
console.log(id);

const navbar = () =>{


}
navbar(company = "dhairya")


// api 
//json  here in json the key is also a string
// {
//     "name":"dhairya the king",
//     "coursename" : "chai or code ni mojj"
//     "price" : "mafat maj hoi ne e toh"

// }
// sometime we got api in the form of array

