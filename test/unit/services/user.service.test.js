const { UserService } = require("../../../src/services");
const { UserRepositoryMock } = require("../../mocks");
const {
  UserModelMock: { user, users }
} = require("../../mocks");

describe("User Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should create a user", async () => {
    // Given
    const UserRepository = UserRepositoryMock;
    UserRepository.create.mockReturnValue(user);
    const _userService = new UserService({ UserRepository });

    // When
    const expected = await _userService.create({...user});

    // Then
    expect(expected).toMatchObject(user);
  });

  it("Should find a user by id", async () => {
    // Given
    const UserRepository = UserRepositoryMock;
    UserRepository.get.mockReturnValue(user);
    const _userService = new UserService({ UserRepository });

    // When
    const expected = await _userService.get(user._id);

    // Then
    expect(expected).toMatchObject(user);
  });

  it("Should find a user by username", async () => {
    // Given
    const UserRepository = UserRepositoryMock;
    UserRepository.getUserByUsername.mockReturnValue(user);
    const _userService = new UserService({ UserRepository });

    // When
    const expected = await _userService.getUserByUsername(user.username);

    // Then
    expect(expected).toMatchObject(user);
  });

  it("Should return a user collection", async () => {
    // Given
    const UserRepository = UserRepositoryMock;
    UserRepository.getAll.mockReturnValue(users);
    const _userService = new UserService({ UserRepository });

    // When
    const expected = await _userService.getAll();

    // Then
    expect(expected).toMatchObject(users);
  });

  it("Should update a user by id", async () => {
    // Given
    const UserRepository = UserRepositoryMock;
    UserRepository.update.mockReturnValue(user);
    const _userService = new UserService({ UserRepository });

    // When
    const expected = await _userService.repository.update(
      user._id,
      user
    );

    // Then
    expect(expected).toMatchObject(user);
  });

  it("Should delete a user by id", async () => {
    // Given
    const UserRepository = UserRepositoryMock;
    UserRepository.delete.mockReturnValue(true);
    const _userService = new UserService({ UserRepository });

    // When
    const expected = await _userService.repository.delete(user._id);

    // Then
    expect(expected).toEqual(true);
  });
});
