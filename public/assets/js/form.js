const form = document.querySelector('#burger-form');
const devour = document.querySelectorAll('.devour');

// create new burger
form.onsubmit = e => {
  e.preventDefault();
  const burgerName = document.querySelector('#burger-name');
  const newBurger = burgerName.value.trim();
  const burger = {
    burger_name: newBurger,
    devoured: false
  };

  // post new burger to server
  axios.post('/api/burgers', burger).then(response => {
    console.log(response);
  });
  burgerName.value = '';
};

// update burger boolean on server
devour.forEach(ele => {
  ele.onclick = function(e) {
    e.preventDefault();
    const id = this.value;

    // logic to update page with new information
    const burger = document.getElementById(`${id}`);
    const button = document.getElementById(`btn-${id}`);
    burger.removeChild(button);
    burger.classList.replace('new', 'devoured');
    eaten.appendChild(burger);


    // logic to update info on server
    const devoured = { devoured: true };
    axios.put(`/api/burgers/${id}`, devoured).then(response => {
      console.log(response);
    });
  };
})
