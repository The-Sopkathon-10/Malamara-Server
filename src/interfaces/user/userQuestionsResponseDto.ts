export interface userQuestionsResponseDto {
  nickname: string;
  profileImage: string;
  count: number;
  questions: userQuestions[];
}

export interface userQuestions {
  question: string;
  decision: string;
  review?: string;
}
