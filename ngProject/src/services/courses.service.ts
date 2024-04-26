import { Inject, Injectable } from '@angular/core';
import { Course } from '../interfaces/course.interface';
import { BehaviorSubject, } from 'rxjs';
import { TuiDialogService } from '@taiga-ui/core';
import { mocks } from '../components/course-list/courses-mock';
import { FilterCoursesPipe } from '../pipes/filterCourses.pipe';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  // Теперь мы изначально получаем коллекцию с "бека", а дальше уже в стрим кладем нужный массив
  private courses!: Record<string, Course>
  public readonly courses$ = new BehaviorSubject<Course[]>([])
  private readonly dialog = this.dialogs.open('',
    {
      label: 'Do you really want to delete this course?',
      size: 's',
      data: { button: 'Yes' },
    },
  )

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private readonly filterPipe: FilterCoursesPipe) {
    this.initCourses()
  }

  // Здесь просто получаем курсы(пока просто мок) и формируем словарь
  private initCourses() {
    this.courses = this.generateCourseRecord()
    this.sortCourses()
  }

  //Здесь мы вытягиваем массив курсов и отправляем их в стрим, на который есть подписки
  private updateCoursesSubject(courseArray: Course[]) {
    this.courses$.next(courseArray)
  }

  generateCourseRecord(): Record<string, Course> {
    return mocks.reduce((acc, course) => {
      acc[course.id] = course
      return acc
    }, {} as Record<string, Course>)
  }
  getAllCourses(): Course[] {
    return [...Object.values(this.courses)]
  }

  getCourseById(id: string): Course | undefined {
    return this.courses[id]
  }

  addToCourses(newCourse: Course) {
    const updatedCourses = {
      ...this.courses,
      [newCourse.id]: newCourse
    }
    this.updateCoursesSubject(Object.values(updatedCourses))
  }

  updateCourseData(id: string, newData: Partial<Course>) {
    if (!this.courses[id]) throw new Error(`Курса с id ${id} нет`)

      const updatedCourseData = {...this.courses[id], ...newData}
      const updatedCourses = {...this.courses,[id]:updatedCourseData}
    
    this.updateCoursesSubject(Object.values(updatedCourses))
  }

  //Здесь пересмотреть реализацию
  deleteCourseById(id: string) {
    if (!this.courses[id]) throw new Error(`Курса с id ${id} нет`)
    if (this.courses[id]) {
      delete this.courses[id]
    }
    this.updateCoursesSubject(Object.values(this.courses))
  }

  sortCourses() {
    const courseArray = Object.values(this.courses)
    const sortedArray = [...courseArray].sort((a, b) => {
      const dateA = new Date(a.creationDate).getTime()
      const dateB = new Date(b.creationDate).getTime()
      return dateB - dateA
    })
    this.updateCoursesSubject(sortedArray)
  }

  filterCourses(inputValue: string) {
    const courseArray = this.filterPipe.transform(mocks, inputValue)
    this.updateCoursesSubject(courseArray)
  }
}