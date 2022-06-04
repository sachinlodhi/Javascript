// local reviews data
// reviews is array of objects
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// Select items
// getElementById can select element with only ID
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const  info= document.getElementById('info');

// querySelectors work with class, id and other properties too
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;
// load event listener

// the initial document is loaded then this even is fired up
window.addEventListener('DOMContentLoaded', function(){
showPerson(currentItem);
});

// Show person based on the iterm
function showPerson(person)
{
  console.log(person);
  const item = reviews[person]; // assigning the object from the list ith index
  // can select the attribute by using dot operator like elem.src -> <img src='----' id ='person-img'>
  img.src = item.img; // same as img.src = reviews[currentItem].img -> accessing the value of the object's element
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;

}
// Show next person
nextBtn.addEventListener('click', function (){
  currentItem++;
  // This keeps currentItem from going to more than the length of the reviews list
  if (currentItem> reviews.length-1)
  {
    currentItem--;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
  currentItem--;
  // This keeps currentItem  from going to negative
  if (currentItem < 0){
    currentItem++;
  }
  showPerson(currentItem);
});



randomBtn.addEventListener('click', function (){
let randomIndex = Math.floor(Math.random()*4);

  showPerson(randomIndex);
});












