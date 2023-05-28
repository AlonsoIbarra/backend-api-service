const { IdeaService } = require("../../../src/services");
const { IdeaRepositoryMock } = require("../../mocks");
const {
  IdeaModelMock: { idea, ideas }
} = require("../../mocks");

describe("Idea Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should create a Idea", async () => {
    // Given
    const IdeaRepository = IdeaRepositoryMock;
    IdeaRepository.create.mockReturnValue(idea);
    const _ideaService = new IdeaService({ IdeaRepository });

    // When
    const response = await _ideaService.create({...idea});

    // Then
    expect(response).toMatchObject(idea);
  });

  it("Should find a Idea by id", async () => {
    // Given
    const IdeaRepository = IdeaRepositoryMock;
    IdeaRepository.get.mockReturnValue(idea);
    const _ideaService = new IdeaService({ IdeaRepository });

    // When
    const response = await _ideaService.get(idea._id);

    // Then
    expect(response).toMatchObject(idea);
  });

  it("Should find a Idea by id", async () => {
    // Given
    const IdeaRepository = IdeaRepositoryMock;
    IdeaRepository.get.mockReturnValue(idea);
    const _ideaService = new IdeaService({ IdeaRepository });

    // When
    const response = await _ideaService.get(idea._id);

    // Then
    expect(response).toMatchObject(idea);
  });

  it("Should return a Idea collection", async () => {
    // Given
    const IdeaRepository = IdeaRepositoryMock;
    IdeaRepository.getAll.mockReturnValue(ideas);
    const _ideaService = new IdeaService({ IdeaRepository });

    // When
    const response = await _ideaService.getAll();

    // Then
    expect(response).toMatchObject(ideas);
  });

  it("Should update a Idea by id", async () => {
    // Given
    const IdeaRepository = IdeaRepositoryMock;
    IdeaRepository.update.mockReturnValue(idea);
    const _ideaService = new IdeaService({ IdeaRepository });

    // When
    const response = await _ideaService.repository.update(
      idea._id,
      idea
    );

    // Then
    expect(response).toMatchObject(idea);
  });

  it("Should delete a Idea by id", async () => {
    // Given
    const IdeaRepository = IdeaRepositoryMock;
    IdeaRepository.delete.mockReturnValue(true);
    const _ideaService = new IdeaService({ IdeaRepository });

    // When
    const response = await _ideaService.repository.delete(idea._id);

    // Then
    expect(response).toEqual(true);
  });
});
