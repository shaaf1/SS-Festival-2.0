const captchaText = generateCaptchaText();
const captchaTextElement = document.getElementById('captcha-text');
const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-button');
const towardsButton = document.getElementById('towards-button');

captchaTextElement.textContent = captchaText;

checkButton.addEventListener('click', () => {
  const userInputValue = userInput.value.trim();
  
  if (userInputValue === captchaText) {
    towardsButton.classList.remove('disabled');
    towardsButton.removeAttribute('disabled');
  } else {
    alert('Verification failed. Please try again.');
  }
});

function generateCaptchaText() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';

  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return captcha;
}
