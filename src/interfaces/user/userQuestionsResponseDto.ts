export interface userQuestionsResponseDto {
  nickname: string;
  profileImage: string;
  questions: userQuestions[];
}

export interface userQuestions {
  question: string;
  decision: string;
  review?: string;
}
