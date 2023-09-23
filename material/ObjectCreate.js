const parent = {
  name: "Maria",
  age: 50,
  heritage: "brasileira",
};

const child = Object.create(parent);
child.name = "Verônica";
child.age = 43;
