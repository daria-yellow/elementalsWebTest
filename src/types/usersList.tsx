import { Color, User } from "./types";

const u1: User = {
  color: Color.RED,
  name: "Red helmet user",
  speed: 80,
  time: 300200,
};

const u2: User = {
  color: Color.BLUE,
  name: "Very long user name fits anyway",
  speed: 90,
  time: 2130200,
};

const u3: User = {
  color: Color.GREEN,
  name: "Green helmet user",
  speed: 100,
  time: 380200,
};

let list: User[] = [];

for (let i = 0; i < 335; i++) {
  list.push({ ...u1 }, { ...u2 }, { ...u3 });
}

export default list;
