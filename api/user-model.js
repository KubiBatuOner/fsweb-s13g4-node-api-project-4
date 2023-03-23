const { v1: uuidv1 } = require("uuid");

function createId() {
  return uuidv1();
}

const initialUsers = () => {
  let initialUserList = [
    { id: createId(), kullaniciadi: "kubi", sifre: "123456" },
    { id: createId(), kullaniciadi: "batu", sifre: "123457" },
    { id: createId(), kullaniciadi: "irem", sifre: "123458" },
    { id: createId(), kullaniciadi: "buse", sifre: "123459" },
  ];
  return initialUserList;
};

let users = initialUsers();

const getAllUsers = () => {
  return users;
};

const createUser = (user) => {
  user.id = createId();
  users.push(user);
  return Promise.resolve(user);
};

const findUser = (user) => {
  let isExistUser = false;
  users.forEach((userItem) => {
    if (
      userItem.kullaniciadi == user.kullaniciadi &&
      userItem.sifre == user.sifre
    ) {
      isExistUser = true;
      return isExistUser;
    }
  });

  return isExistUser;
};

const checkUserName = (kullaniciadi) => {
  let isExistUserName = false;
  for (let i = 0; i < users.length; i++) {
    const userItem = users[i];
    if (userItem.kullaniciadi == kullaniciadi) {
      isExistUserName = true;
      break;
    }
  }
  return isExistUserName;
};

module.exports = {
  getAllUsers,
  createUser,
  findUser,
  checkUserName,
};
