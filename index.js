const form = document.querySelector(".form");
form.addEventListener("input", saveTolocalStorage)
const localStorageKey = "userInfo";
function saveTolocalStorage() {
    const userName = form.elements.userName.value.trim();
    const userSurname = form.elements.userSurname.value.trim();
    const userEmail = form.elements.userEmail.value.trim();
    const userTel = form.elements.userTel.value.trim();
    const userComent = form.elements.userComent.value.trim();
    
    const information = {
        name: userName,
        surname: userSurname,
        email: userEmail,
        tel:userTel,
        coment:userComent
    };

    const zipInformation = JSON.stringify(information);
    localStorage.setItem(localStorageKey, zipInformation)
    console.log(typeof zipInformation);
  
}



function getFromLocalStorege() {
    const dataFromLocalStorage = localStorage.getItem(localStorageKey);
  const parseData = JSON.parse(dataFromLocalStorage);
   
  console.log(parseData);

  form.elements.userName.value = parseData?.name || ""  
  form.elements.userSurname.value = parseData?.surname || ""
  form.elements.userEmail.value = parseData?.email || ""
  form.elements.userTel.value = parseData?.tel || ""
  form.elements.userComent.value = parseData?.coment || ""
}

getFromLocalStorege()

form.addEventListener("submit", sendForm)

function sendForm(e) {
    e.preventDefault()

    const saveInfo = {
        name: form.elements.userName.value.trim(),
        surname: form.elements.userSurname.value.trim(),
        email: form.elements.userEmail.value.trim(),
        tel:form.elements.userTel.value.trim(),
        coment:form.elements.userComent.value.trim()
    };

   if (saveInfo.email === "") {
    alert("заповніть обовязкове поле")
   } else {
    localStorage.removeItem(localStorageKey)
    form.reset()
    return saveInfo;
   }

}








