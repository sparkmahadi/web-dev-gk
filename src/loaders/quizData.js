export const quizData = async () => {
    const quizResponse = await fetch('https://openapi.programming-hero.com/api/quiz')
    const quizes = quizResponse.json();
    return quizes;
}