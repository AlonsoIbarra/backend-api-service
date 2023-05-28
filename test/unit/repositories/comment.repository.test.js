const { CommentRepository } = require("../../../src/repositories");
const mockingoose = require('mockingoose');
const { Comment } = require("../../../src/models");
let {
    CommentModelMock: { comment, comments }
} = require("../../mocks");

describe(
    "Comment Repository Tests",
    () =>  {
        beforeEach(() => {
            mockingoose.resetAll();
            jest.clearAllMocks();
        });

        it("Should return comment by id", async () => {
                // Given
                mockingoose(Comment).toReturn(comment, "findOne");
                const _commentRepository = new CommentRepository({ Comment });

                // When
                const response = await _commentRepository.get(comment._id);

                // Then
                expect(JSON.parse(JSON.stringify(response))).toMatchObject(comment);

            }
        );

        it("Get idea comments", async () => {
            // Given
            mockingoose(Comment).toReturn(comments, "find");
            const _commentRepository = new CommentRepository({ Comment });

            // When
            const response = await _commentRepository.getAll();

            // Then
            expect(JSON.parse(JSON.stringify(response))).toMatchObject(comments);
        });

        it("Should update an especific comment by id", async () => {
            // Given
            mockingoose(Comment).toReturn(comment, "findOneAndUpdate");
            const _commentRepository = new CommentRepository({ Comment });

            // When
            const response = await _commentRepository.update(
                comment._id,
                {
                    comment: "New comment."
                }
            );

            // Then
            expect(JSON.parse(JSON.stringify(response))).toMatchObject(comment);
        });

        it("Should delete an especific comment by id", async () => {
            // Given
            mockingoose(Comment).toReturn(comment, "findOneAndDelete");
            const _commentRepository = new CommentRepository({ Comment });

            // When
            const expected = await _commentRepository.delete(comment._id);

            // Then
            expect( JSON.parse( JSON.stringify( expected ) ) ).toEqual(true);
        });
    }
);
