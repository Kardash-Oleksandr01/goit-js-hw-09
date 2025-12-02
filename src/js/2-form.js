const formData = {email:'', message: ''};

const formClass = document.querySelector('.feedback-form');

const localStorageKey = "feedback-form-state";

const savedData = localStorage.getItem(localStorageKey) ?? "";

if (savedData){
    const parsedData = JSON.parse(savedData);
    formClass.elements.email.value = parsedData.email ?? '';
    formClass.elements.message.value = parsedData.message ?? '';
}


formClass.addEventListener('input', ()=> {
    formData.email = formClass.elements.email.value;
    formData.message = formClass.elements.message.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
})

formClass.addEventListener('submit', handleInput);



function handleInput(event){
    event.preventDefault()
    const form = event.target;
    const emailInp = form.elements.email.value.trim();
    const textInp = form.elements.message.value.trim();
    if (emailInp.length === 0 || textInp.length === 0){
        alert('Fill please all fields');
        return;
    }
    console.log(`Email: ${emailInp}; Message: ${textInp}`);
    localStorage.removeItem(localStorageKey);
    form.reset();
}