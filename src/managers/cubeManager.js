const uniqid = require('uniqid');
const cubes = [
  {
    id: '1l53hw34li8pb2gc',
    name: 'Mirror Cube',
    description: 'Cool one',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mirror_Cube_solved.png/1200px-Mirror_Cube_solved.png',
    difficultyLevel: '4',
  },
  {
    id: '2l22hw34li8pb2gc',
    name: 'Mirror Cube',
    description: 'Cool one',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2JBLI6ha2kI2bepVACnPHX3luHi1kCEs4qA&usqp=CAU',
    difficultyLevel: '4',
  },
];

// Get All cubes
exports.getAll = () => cubes.slice();
// Get Cube by id
exports.getOne = (cubesId) => cubes.find((x) => x.id == cubesId);

exports.create = (cubeData) => {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  };
  cubes.push(newCube);

  return newCube;
};
