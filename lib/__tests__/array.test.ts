import {create, emit} from "../index"

describe("an emitted array type", () => {
    describe("with one base type", () => {
        it("matches the snapshot", () => {
            const arr = create.array('string');
            const typeAlias = create.alias('testArr', arr);

            expect(emit(typeAlias)).toMatchSnapshot();
        });
    });

    describe("with multiple types", () => {
        it("matches the snapshot", () => {
            const arr = create.array('string');
            const union = create.union(['boolean', 'string']);
            const tuple = create.array([arr, 'number', union]);
            const typeAlias = create.alias('testTuple', tuple);

            expect(emit(typeAlias)).toMatchSnapshot();
        });
    });

    describe("with a tuple as base type", () => {
        it("matches the snapshot", () => {
            const tuple = create.array(['number', 'string']);
            const arr = create.array(tuple);
            const typeAlias = create.alias('testTupleArr', arr);

            expect(emit(typeAlias)).toMatchSnapshot();
        });
    });
});
