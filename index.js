const form = document.querySelector(".notify");
const email = document.getElementById("email");
const errorText = document.querySelector(".error-text");

form.onsubmit = () => {
  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (regex.test(String(email.value))) {
    return true;
  } else {
    errorText.style.display = "block";
    email.style.borderColor = "hsl(354, 100%, 66%)";
    return false;
  }
};

email.oninput = () => {
  errorText.style.display = "none";
  email.style.borderColor = "hsl(223, 100%, 88%)";
};
