const posts = [
  { title: "post one", body: "this is one post" },
  { title: "post one", body: "this is one post" },
];

function creatPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      resolve();
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

creatPost({ title: "post three", body: "this is three post" }).then(getPosts);
