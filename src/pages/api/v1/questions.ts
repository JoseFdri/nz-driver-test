import questionsData from "@data/questions";

const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export async function GET() {
  const questionsId = randomIntFromInterval(1, 110);
  return new Response(JSON.stringify(questionsData[`question_${questionsId}`]), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

