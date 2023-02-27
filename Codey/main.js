let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

const textChange = () => {
  view.innerHTML = 'Hello, World!';
}

const textReturn = () => {
  view.innerHTML = 'View';
}

view.addEventListener('click', textChange);

close.addEventListener('click', textReturn);

//close.onclick = textReturn;


// Write your code here