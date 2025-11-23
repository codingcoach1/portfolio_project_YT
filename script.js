let users = [
  {
    username: "Tanisha Verma",
    image: "https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Software Developer",
    description: "Full-stack developer specializing in MERN stack with 3+ years of experience."
  },
  {
    username: "Priya Vikash",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    profession: "Graphic Designer",
    description: "Creative designer with a passion for minimalist branding and digital illustrations."
  },
  {
    username: "Arjun Singh",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    profession: "Fitness Coach",
    description: "Certified trainer helping people achieve their fitness goals through personalized plans."
  },
  {
    username: "Sneha Kapoor",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    profession: "Content Writer",
    description: "Writes blogs, SEO content, and social media copies with engaging storytelling."
  },
  {
    username: "Vivek Kumar",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Digital Marketer",
    description: "Specializes in SEO, PPC ads, and social media marketing with data-driven strategies."
  }
];


var sum = ''

users.forEach(function(elem){

    sum = sum + `<div class="card">
      <img src="${elem.image}" alt="">
      <h3>${elem.username}</h3>
      <h4>${elem.profession}</h4>
      <p>${elem.description}</p>
    </div>`

})

var main = document.querySelector('main')

main.innerHTML = sum
