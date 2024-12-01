const form = document.querySelector('.form');
const nameInput = form.querySelector('input[name="name"]');
const phoneInput = form.querySelector('input[name="phone"]');
const nameError = form.querySelector('.form__error--name');
const phoneError = form.querySelector('.form__error--phone');
const nameRegEx = /^[a-zA-Zа-яёА-ЯЁ\s]+$/;
const phoneRegEx = /^\d+$/;

const validateInput = (input, regex, error) => {
  const isValid = regex.test(input.value);
  error.style.display = isValid ? 'none' : 'block';
  input.classList.toggle('form__input--error', !isValid);
  return isValid;
};

const initFormValidation = () => {
  form.addEventListener('submit', (event) => {
    const isNameValid = validateInput(nameInput, nameRegEx, nameError);
    const isPhoneValid = phoneInput.value ? validateInput(phoneInput, phoneRegEx, phoneError) : true;
    if (!isNameValid || !isPhoneValid) {
      event.preventDefault();
    }
  });
};

export {initFormValidation};
