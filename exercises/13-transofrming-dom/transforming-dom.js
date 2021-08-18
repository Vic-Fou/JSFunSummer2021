/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  const addRoleToRedAlert=document.querySelector(".alert.alert-danger");
  addRoleToRedAlert.setAttribute('role','alert');

  const divLinkChange=document.querySelector(".alert.alert-warning a");
  divLinkChange.setAttribute("href","https://developer.mozilla.org/en-US/docs/Web/JavaScript");

  /*const removeBlank=document.querySelector("target");
  removeBlank.removeAttribute("_blank");*/

  const divWithMyName=document.querySelector("div .alert.alert-success");
  divWithMyName.textContent="I am Victorious! (literally...=^u^=)";

  const newBackgrounColor=document.querySelector(".alert.alert-info");
  newBackgrounColor.style.backgroundColor="gold";

  const changeColorThruClass=document.querySelector('#secondAlert');
  changeColorThruClass.setAttribute('class','bg-primary');
  
  const hideElement=document.querySelector("#thirdAlert");
  hideElement.style.display="none";

  const showHiddenElement=document.querySelector(".alert.alert-success.hidden");
  showHiddenElement.setAttribute("class","alert alert-secondary");

  const checkForBtn=document.querySelector(".btn.btn-primary.ml-1.m4-1");
  
  const notifyBtnCheck=document.querySelector("div[class='text-dark']");
  if (checkForBtn.classList.contains("btn-primary")){
    notifyBtnCheck.textContent="checked blue";
  }
  // Put your answers in here
})();
