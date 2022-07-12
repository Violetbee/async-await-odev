import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => data.json())
//   .then((posts) => console.log(posts));

// async function getData() {
//   const data = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();
//   console.log(data);
// }

// getData();
//-----------------------------------------------
// (async () => {
//   const { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );
//   const { data: post2 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/2"
//   );
//   const { data: post3 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/3"
//   );
//   const { data: users } = await axios(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   console.log("Post1 yüklendi", post1);
//   console.log("Post2 yüklendi", post2);
//   console.log("Post3 yüklendi", post3);
//   console.log("Users yüklendi", users);
// })();
//-----------------------------------------------------

// const getComments = () => {
//   return new Promise(async (resolve, reject) => {
//     const { data: users } = await axios(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     if (users) {
//       resolve(users);
//     } else {
//       reject("Obje bulunamadı ya da boş");
//     }
//   });
// };

// getComments()
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data: users } = await axios(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (users) {
      resolve(users);
    } else {
      reject("Boş ya da bulunamayan obje");
    }
  });
};

// getUsers()
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

const getData = () => {
  return new Promise(async (resolve, reject) => {
    const { data: users } = await axios(
      "https://jsonplaceholder.typicode.com/users"
    );
    users ? resolve(users) : reject("Obje bulunamadı ya da boş");
  });
};

const getPost = (postId) => {
  return new Promise(async (resolve, reject) => {
    const { data: post } = await axios(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    if (typeof postId === "number") {
      resolve(post);
    } else reject("Lütfen geçerli bir gönderi numarası giriniz.");
  });
};

(async () => {
  try {
    const datas = await getData();
    const post = await getPost(1);
    console.log(datas);
    console.log(post);
  } catch (e) {
    console.log(e);
  }
})();
