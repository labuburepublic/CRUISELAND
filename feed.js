const posts = [
  {
    user: "Fabrizio Romano",
    avatar: "assets/fabrizio.jpg",
    time: "1h ago",
    text: "Here we go! Mbappé joins Real Madrid 📝",
    image: "assets/mbappe.jpg",
    likes: 120000,
    comments: [
      { name: "FootballFan", text: "Finally! 🔥🔥" },
      { name: "Madridista", text: "HALA MADRID!" }
    ]
  },
  {
    user: "Davido",
    avatar: "assets/davido.jpg",
    time: "3h ago",
    text: "E choke! CruiseHub don launch 💥",
    image: "assets/post1.jpg",
    likes: 45120,
    comments: [
      { name: "Wizkid", text: "No worry 🔥" },
      { name: "Fan", text: "OBO to the world!" }
    ]
  },
  {
    user: "Messi",
    avatar: "assets/messi.jpg",
    time: "2h ago",
    text: "Grateful for the support always 🙌",
    image: "assets/post2.jpg",
    likes: 50231,
    comments: [
      { name: "CR7", text: "Nice bro 🙏" },
      { name: "Fan", text: "GOAT things!" }
    ]
  },
  {
    user: "Burna Boy",
    avatar: "assets/burna.jpg",
    time: "30min ago",
    text: "Love, Damini 🦍",
    image: "assets/post3.jpg",
    likes: 38900,
    comments: [
      { name: "Fan", text: "Odogwuuu 🔥" },
      { name: "Rema", text: "Heavy vibes" }
    ]
  },
  {
    user: "Cristiano Ronaldo",
    avatar: "assets/ronaldo.jpg",
    time: "5h ago",
    text: "Siuuuuu! 💪",
    image: "assets/post4.jpg",
    likes: 80012,
    comments: [
      { name: "Messi", text: "🔥" },
      { name: "Fan", text: "Legend forever!" }
    ]
  }
];

const feedContainer = document.getElementById("feed");

posts.forEach(post => {
  const postEl = document.createElement("div");
  postEl.className = "post";
  postEl.innerHTML = `
    <div class="post-header">
      <img src="${post.avatar}" class="avatar"/>
      <div>
        <div class="username">${post.user}</div>
        <div class="time">${post.time}</div>
      </div>
    </div>
    <div class="post-text">${post.text}</div>
    <img src="${post.image}" class="post-img" />
    <div class="likes">${post.likes.toLocaleString()} Likes</div>
    <div class="comment"><strong>${post.comments[0].name}:</strong> ${post.comments[0].text}</div>
    <div class="comment"><strong>${post.comments[1].name}:</strong> ${post.comments[1].text}</div>
  `;
  feedContainer.appendChild(postEl);
});