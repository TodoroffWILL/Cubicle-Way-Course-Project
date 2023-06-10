const Cube = require('../models/Cube');

// Get All cubes
exports.getAll = async (search, from, to) => {
  let result = await Cube.find().lean();

  // TODO: use mongoose to filter in the db
  if (search) {
    result = result.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (from) {
    result = result.filter((cube) => cube.difficultyLevel >= Number(from));
  }
  if (to) {
    result = result.filter((cube) => cube.difficultyLevel <= Number(to));
  }
  return result;
};
// Get Cube by id
exports.getOne = (cubeId) =>
  Cube.findById(cubeId).populate('accessories').lean(); // От документ който връща монгоосе го прави на обект/auery

exports.create = async (cubeData) => {
  const newCube = await Cube.create(cubeData);
  return newCube;
};

exports.update = (cubeId, cubeData) => Cube.findByIdAndUpdate(cubeId, cubeData);

exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId);

exports.attachAccessory = async (cubeId, accessoryId) => {
  return Cube.findByIdAndUpdate(cubeId, {
    $push: { accessories: accessoryId },
  });
};
