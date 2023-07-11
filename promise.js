const posts = [
  { title: "Post One", body: "This is post one paragraph" },
  { title: "Post Two", body: "This is post Two paragraph" },
  { title: "Post Three", body: "This is post Three paragraph" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title} </li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = true;

      if (!error) {
        resolve();
      } else {
        reject("Error: something went wrong");
      }
    }, 2000);
  });
}

createPost({ title: "Post Four", body: "This is post four Paragraph" })
  .then(getPosts)
  .catch((err) => console.log(err));
