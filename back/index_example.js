document.getElementById("form__btn").onclick = () => {
    let formInfo = {
      firstName: document.getElementById("first__name").value,
      lastName: document.getElementById("last__name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
    };
  
    let message =
      "New Client " +
      "%0A" +
      "%0A" +
      "FIRST NAME: " +
      formInfo.firstName +
      "%0A" +
      "LAST NAME: " +
      formInfo.lastName +
      "%0A" +
      "E-MAIL: " +
      formInfo.email +
      "%0A" +
      "TEL: " +
      formInfo.phone;
  
    const token = "your telegram bot token";
    const chatId = "id of your telegram group where data should be stored";
  
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`;
    let xhttp = new XMLHttpRequest();
  
    xhttp.open("GET", url, true);
    xhttp.send();
  };
  