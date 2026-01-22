const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

let formData = {
  email: "",
  message: "",
};

// Завантаження даних з localStorage при загрузці сторінки
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData = parsedData;
    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;
  }
});

// Слухання input подій на формі
form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

// Слухання submit подій на формі
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }
  
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
  formData = { email: "", message: "" };
});
