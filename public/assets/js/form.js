const form = document.querySelector('#burger-form');
const devour = document.getElementsByClassName('devour');

// post new burger to server
form.onsubmit = e => {
  e.preventDefault();
  const burgerName = document.querySelector('#burger-name').value.trim();
  const burger = {
    burger_name: burgerName,
    devoured: false
  };
  axios.post('/api/burgers', burger).then(response => {
    console.log(response);
  });
};

// update burger boolean
for (let i = 0; i < devour.length; i++) {
  devour[i].onclick = e => {
    e.preventDefault();
    const id = devour[i].value;
    const devoured = { devoured: true };
    axios.put(`/api/burgers/${id}`, devoured).then(response => {
      console.log(response);
    });
  };
}
