import { mocks } from "../../components/course-list/courses-mock";
import { Course } from "../../interfaces/course.interface";
import { FilterCoursesPipe } from "../filterCourses.pipe";

describe('FilterPipe', () => {
    let pipe: FilterCoursesPipe
    const courses = mocks

    beforeEach(() => {
        pipe = new FilterCoursesPipe()
    })

    it('создаем инстанс пайпа', () => {
        expect(pipe).toBeTruthy()
    })

    it("Проверка на пустой ввод и пустой массив" ,() => {
        const emptyCourses: Course[] = []

        expect(pipe.transform(courses, '  ')).toBe(courses)
        expect(pipe.transform(courses, '')).toBe(courses)
        expect(pipe.transform(emptyCourses, 'search')).toEqual([])
    })

    it('Проверка при пераднном значении', () => {
        expect(pipe.transform(courses,'Video').length).toEqual(2)
    })
})