let profileImg = document.querySelector(".profileImg");
let nameHeading = document.querySelector(".nameHeading");
let jobHeading = document.querySelector(".jobHeading");
let infoText = document.querySelector(".infoText");
let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");

let profiles = [
  {
    id: 1,
    name: "Sara Johnson",
    job: "web developer",
    img: "img/img1.jpg",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odio eum esse molestiae natus, facere, nihil id molestias porro illum libero neque? Ex accusantium unde placeat harum fuga, voluptatum neque",
  },
  {
    id: 2,
    name: "John Doe",
    job: "finance officer",
    img: "img/img2.jpg",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta autem inventore nam fugit. Tempore hic vitae numquam accusamus ipsam maiores, nostrum repudiandae. Voluptas omnis illo.",
  },
  {
    id: 3,
    name: "Luke whattman",
    job: "business manager",
    img: "img/img3.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus dolorum incidunt. Dolor nesciunt excepturi aut facere blanditiis eveniet, officia, nam reprehenderit, iste cum quisquam illo?",
  },
  {
    id: 4,
    name: "Jeniffer Loptz",
    job: "web designer",
    img: "img/img4.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corporis harum suscipit obcaecati fugit atque veritatis? Placeat, corrupti veritatis dolorem dolorum, nostrum quae reiciendis nisi ad cupiditate",
  },
];

let indexNumber = 0;

window.addEventListener('DOMContentLoaded', function()
{
    showProfile(indexNumber);
});

function showProfile(person)
{
    let items = profiles[person];
    profileImg.src = items.img;
    nameHeading.textContent = items.name;
    jobHeading.textContent = items.job;
    infoText.textContent = items.info;
}

nextBtn.addEventListener('click',function()
{
    indexNumber++;
    if(indexNumber > profiles.length - 1)
    {
        indexNumber = 0;
    }
    showProfile(indexNumber);
})

prevBtn.addEventListener('click',function()
{
    indexNumber--;
    if(indexNumber < 0)
    {
        indexNumber = profiles.length - 1;
    }
    showProfile(indexNumber);
})