const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('btn1');
const storedInput = localStorage.getItem('textinput')

if(storageInput) {
  text.textContent = storedInput
}

storageInput.addEventListener('input', letter => {
  text.textContent = letter.target.value
})
const saveToLocalStorage = () => {
  localStorage.setItem('textinput', text1.textContent)
}

button.addEventListener('click', saveToLocalStorage)

//Used to evaluate time in planner
if (clock => "9:00AM" && clock <= "9:59AM") { 
  text1 = current} else {text1 = future}

if (clock => "10:00AM" && clock <= "10:59AM") {
  text2 = current} else {text2 = future}

if (clock => "11:00AM" && clock <= "11:59AM") {
  text3 = current} else {text3 = future}

if (clock => "12:00AM" && clock <= "12:59PM") {
  text4 = current} else {text4 = future}

if (clock => "1:00PM" && clock <= "1:59PM") {
  text5 = current} else {text5 = future}

if (clock => "2:00PM" && clock <= "2:59AM") {
  text6 = current} else {text6 = future}

if (clock => "3:00PM" && clock <= "3:59PM") {
  text7 = current} else {text7 = future}

if (clock => "7:00PM" && clock <= "7:59PM") {
  text9 = .current} else {text9 = .future}
