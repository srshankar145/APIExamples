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

// since without using call back getposts function will execute but create post will not execute due to time difference .

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

// getPosts();
// createPost({ title: "Post Three", body: "This is post four Paragraph" });

// instead of above we can use call back and so use createpost along with callback getpost
createPost(
  { title: "Post Four", body: "This is post four Paragraph" },
  getPosts
);
