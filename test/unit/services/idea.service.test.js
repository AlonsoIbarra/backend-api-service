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

  it("Should find user ideas", async () => {
    // Given
    const IdeaRepository = IdeaRepositoryMock;
    IdeaRepository.getUserIdeas.mockReturnValue(ideas);
    const _ideaService = new IdeaService({ IdeaRepository });

    // When
    const response = await _ideaService.getUserIdeas(idea.author);

    // Then
    expect(response).toMatchObject(ideas);
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
    const response = await _ideaService.update(
      idea._id,
      {
        "description": "New description..."
      }
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
    const response = await _ideaService.delete(idea._id);

    // Then
    expect(response).toEqual(true);
  });

  it("Up vote a user idea", async () => {
    // Given
    const IdeaRepository = IdeaRepositoryMock;
    IdeaRepository.update.mockReturnValue(idea);
    const _ideaService = new IdeaService({ IdeaRepository });

    // When
    const response = await _ideaService.upVoteIdea(idea._id);

    // Then
    expect(response).toMatchObject(idea);
  });

  it("Down vote a user idea", async () => {
    // Given
    const IdeaRepository = IdeaRepositoryMock;
    IdeaRepository.update.mockReturnValue(idea);
    const _ideaService = new IdeaService({ IdeaRepository });

    // When
    const response = await _ideaService.downVoteIdea(idea._id);

    // Then
    expect(response).toMatchObject(idea);
  });
});
