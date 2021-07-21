const animals = {
    "dog": "4 legs",
    "cat": "4 legs"

};
for(let creature in animals){
    const legs = creature[animals];
    console.log(creature+':'+ animals)
}
const books = [{
    name: "Eloquent JavaScript",
    authors: ["Marijn Haverbeke"],
    publishDate: "2016-05-10"
  },{
    name: "Secrets of the JavaScript Ninja",
    authors: ["John Resig","Bear Bibeault","Josip Maras"],
    publishDate: "2016-09-10"
  },{
    name: "JavaScript and JQuery: Interactive Front-End Web Development",
    authors: ["Jon Duckett"],
    publishDate: "2014-06-30"
  }];
  console.log(books[].name)