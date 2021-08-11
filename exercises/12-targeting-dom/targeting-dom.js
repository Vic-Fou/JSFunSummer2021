/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  // Put your answers in here
  //const openli=document.querySelector("li");
  console.log(document.querySelector("li"));

  //const liWithId=document.querySelector("#myid");
  console.log(document.querySelector("#myid"));

  console.log(document.querySelector("#myid"));
  const liByClass=document.querySelectorAll(".bg-warning");

  console.log(Object.values(liByClass));
  const linkAndButton=document.querySelectorAll('[data-mygroup]');
  console.log(Object.values(linkAndButton));

  const nestedDiv=document.querySelectorAll("#myRow div");
  console.log(Object.values(nestedDiv));
})();

/* Won't Let me Define document, to use doucment.querySelector()*/
