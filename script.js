class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

class Display {
  add(book) {
    console.log('hello')
    let tableBody = document.getElementById('tablebody');
    let tableContent =  `<tr>
                           <th class="tabletitle scope="col">${book.name}</th>
                           <th class="tabletitle scope="col">${book.author}</th>
                           <th class="tabletitle scope="col">${book.type}</th>
                        </tr>`
    tableBody.innerHTML += tableContent;
    console.log('hello')
  }

  clear() {
    let libForm = document.getElementsByClassName('lib__form')[0];
    libForm.reset();
  }

  validate(book) {
    console.log(book)
    if (book.name.length < 2 || book.author.length < 2) {
      return false
    }
    else {
      return true;
    }
  }

  show(type) {
    let msg = document.getElementById('message')
    if (type==='Success') {
      msg.innerHTML = `<div class="alert" style="background-color: #00ff848c;">
                         <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                         <strong>Success!</strong> your book added sucessfullly 👍
                       </div>`
    } else {
      msg.innerHTML = `<div class="alert" style="background-color: #ff0028c2; color: white;">
                       <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                       <strong>Error!</strong> Oops there was an error, plz try again😢
                       </div>`
    }
    setTimeout(function () {
      msg.innerHTML = ""
    },5000);


  }
}


let libForm = document.getElementsByClassName('lib__form')[0];
libForm.addEventListener('submit', libFormBtn)



function libFormBtn(e) {
  e.preventDefault();
  let name = document.getElementById('book__name').value;
  let author = document.getElementById('author__name').value;
  let type;
  let fiction = document.getElementsByClassName('book__fiction')[0];
  let novels = document.getElementsByClassName('book__novels')[0];
  let horror = document.getElementsByClassName('book__horror')[0];

  if (fiction.checked) {
    type = fiction.value;
  }
  else if (novels.checked) {
    type = novels.value;
  }
  else if (horror.checked) {
    type = horror.value;
  }

  let book = new Book(name, author, type);
  // console.log(book);

  let display = new Display();

  if (display.validate(book)) {

    display.add(book);
    display.clear();
    display.show('Success')
  }
  else {
    // Show error to the user
    display.show('error');
  }
}