let users = ["Артем", "Дмитро", "Максим", "Віктор", "Ольга", "Валерій", "Юлія"];
function check(nameOfCheckedUser) {
  let exist = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i] == nameOfCheckedUser) {
      exist = true;
      break;
    }
  }
  if (exist == true) {
    return true;
  } else {
    return false;
  }
}
function show() {
  document.getElementById("output").innerHTML = "";
  users.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  for (let i = 0; i < users.length; i++) {
    document.getElementById("output").innerHTML += `User ${i + 1}: ${
      users[i]
    };<br/>`;
  }
}
function add() {
  let nameUser = prompt("Уведіть ім'я нового користувача");
  if (check(nameUser) == false) {
    users.push(nameUser);
  } else {
    alert("Помилка! Користувач з таким іменем вже використаний");
  }
}
