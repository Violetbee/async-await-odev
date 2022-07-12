import axios from "axios";

const getUserDatas = async (userId) => {
  const { data: getUserData } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const { data: getUserPostData } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  const newUserData = {
    ...getUserData,
    posts: getUserPostData,
  };

  console.log(newUserData);
};

getUserDatas(1);
