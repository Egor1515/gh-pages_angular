export interface Course {
  readonly id: string;
  readonly name: string;
  readonly creationDate: Date;
  readonly duration: number;
  readonly description: string;
  readonly topRated: boolean;
}
