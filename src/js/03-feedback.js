import _throttle from 'lodash.throttle';

let feedbackFormState = {
  email: '',
  message: '',
};
if (!localStorage.getItem('feedback-form-state')) {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

const form = document.querySelector('.feedback-form');
form.addEventListener('input', _throttle(onInputChange, 500));
form.addEventListener('submit', onSubmit);

form.elements.email.required = 'true';
form.elements.message.required = 'true';

onFormUpdate();

function onFormUpdate() {
  feedbackFormState = JSON.parse(localStorage.getItem('feedback-form-state'));

  form.elements.email.value = feedbackFormState.email;
  form.elements.message.value = feedbackFormState.message;
}

function onInputChange() {
  feedbackFormState.email = form.elements.email.value;
  feedbackFormState.message = form.elements.message.value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

function onSubmit(e) {
  e.preventDefault();

  const submitData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log('submitData :>> ', submitData);

  feedbackFormState.email = '';
  feedbackFormState.message = '';
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );

  e.currentTarget.reset();
}
