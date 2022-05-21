export interface QuestionCreateDTO {
  userId: string;
  question: string;
  choices?: [string];
}
