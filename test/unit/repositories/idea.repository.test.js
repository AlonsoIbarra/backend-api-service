const { IdeaRepository } = require("../../../src/repositories");
const mockingoose = require('mockingoose');
const { Idea } = require("../../../src/models");
let {
    IdeaModelMock: { idea, ideas }
} = require("../../mocks");

describe(
    "Idea Repository Tests",
    () =>  {
        beforeEach(() => {
            mockingoose.resetAll();
            jest.clearAllMocks();
        });

        it("Should return Idea by id", async () => {
                // Given
                const _idea = {...idea};
                mockingoose(Idea).toReturn(idea, "findOne");
                const _ideaRepository = new IdeaRepository({ Idea });

                // When
                const response = await _ideaRepository.get(_idea._id);

                // Then
                expect(JSON.parse(JSON.stringify(response))).toMatchObject(_idea);

            }
        );

        it("Get User Ideas", async () => {
            // Given
            const _idea = { ...idea };
            mockingoose(Idea).toReturn(ideas, "find");
            const _ideaRepository = new IdeaRepository({ Idea });

            // When
            const response = await _ideaRepository.getUserIdeas(_idea.author);

            // Then
            expect(JSON.parse(JSON.stringify(response))).toMatchObject(ideas);
        });

        it("Should update an especific idea by id", async () => {
            // Given
            const _idea = { ...idea };
            mockingoose(Idea).toReturn(_idea, "findOneAndUpdate");
            const _ideaRepository = new IdeaRepository({ Idea });

            // When
            const response = await _ideaRepository.update(
                _idea._id,
                {
                    idea: "New idea name."
                }
            );

            // Then
            expect(JSON.parse(JSON.stringify(response))).toMatchObject(_idea);
        });

        it("Should delete an especific idea by id", async () => {
            // Given
            mockingoose(Idea).toReturn(idea, "findOneAndDelete");
            const _ideaRepository = new IdeaRepository({ Idea });

            // When
            const expected = await _ideaRepository.delete(idea._id);

            // Then
            expect( JSON.parse( JSON.stringify( expected ) ) ).toEqual(true);
        });
    }
);
