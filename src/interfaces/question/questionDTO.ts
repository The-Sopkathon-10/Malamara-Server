export interface QuestionCreateDTO {
  userId: string;
  question: string;
  choices?: string[];
}

export interface ChoicesDTO {
  choices: string[];
}
