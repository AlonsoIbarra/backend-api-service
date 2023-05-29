const { CommentService } = require("../../../src/services");
const { CommentRepositoryMock, IdeaRepositoryMock } = require("../../mocks");
const {
  CommentModelMock: { comment, comments }
} = require("../../mocks");
const {
  IdeaModelMock: { idea }
} = require("../../mocks");
// const { Idea } = require("../../mocks/models/idea.model.mock");

describe("Comment Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should create a idea comment", async () => {
    // Given
    const CommentRepository = CommentRepositoryMock;
    const IdeaRepository = IdeaRepositoryMock;
    CommentRepository.create.mockReturnValue(comment);
    IdeaRepository.get.mockReturnValue(idea);
    const _commentService = new CommentService({ CommentRepository, IdeaRepository });

    // When
    const response = await _commentService.createComment(idea._id, {...comment});

    // Then
    expect(response).toMatchObject(comment);
  });

  it("Should find a Comment by id", async () => {
    // Given
    const CommentRepository = CommentRepositoryMock;
    CommentRepository.get.mockReturnValue(comment);
    const _commentService = new CommentService({ CommentRepository, IdeaRepositoryMock });

    // When
    const response = await _commentService.get(comment._id);

    // Then
    expect(response).toMatchObject(comment);
  });

  it("Should return idea comments collection", async () => {
    // Given
    const IdeaRepository = IdeaRepositoryMock;
    IdeaRepository.get.mockReturnValue(idea);
    const _commentService = new CommentService({ CommentRepositoryMock, IdeaRepository });

    // When
    const response = await _commentService.getIdeaComments(idea._id);

    // Then
    expect(response).toMatchObject(idea.comments);
  });

  it("Should update a Comment by id", async () => {
    // Given
    const IdeaRepository = IdeaRepositoryMock;
    const CommentRepository = CommentRepositoryMock;
    IdeaRepository.get.mockReturnValue(idea);
    CommentRepository.update.mockReturnValue(comment);
    const _commentService = new CommentService({ CommentRepository, IdeaRepository });

    // When
    const response = await _commentService.update(
      comment._id,
      {
        "comment": "New comment..."
      }
    );

    // Then
    expect(response).toMatchObject(comment);
  });

  it("Should delete a Comment by id", async () => {
    // Given
    const CommentRepository = CommentRepositoryMock;
    CommentRepository.delete.mockReturnValue(true);
    const _commentService = new CommentService({ CommentRepository, IdeaRepositoryMock });

    // When
    const response = await _commentService.delete(comment._id);

    // Then
    expect(response).toEqual(true);
  });
});
