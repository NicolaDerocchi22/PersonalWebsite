const SendMessage = () => {
  const subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;

  if (subject && message && name && surname) {
    message = message + '\n ' + '\n' + name + ' ' + surname;

    var link = 'mailto:nicoladerocchi3@gmail.com' + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);
    window.location.href = link;
  } else {
  }
};
