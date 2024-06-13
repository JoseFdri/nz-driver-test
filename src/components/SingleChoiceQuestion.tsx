import { useState, useRef, useEffect } from "react";

interface SingleChoiceQuestionProps {
  question: {
    ID: number;
    Image?: string;
    Question?: string;
    Answers: {
      ID?: number;
      Answer?: string;
      Image?: string;
      Correct?: boolean;
    }[];
  };
}

const SingleChoiceQuestion: React.FC<SingleChoiceQuestionProps> = ({
  question,
}) => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.maxHeight =
          contentRef.current.scrollHeight + "px";
      } else {
        contentRef.current.style.maxHeight = "0px";
      }
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col p-3 md:p-0 container">
      <h3 className="text-white text-center font-bold md:text-3xl">
        {question.Question}
      </h3>
      {question.Image && (
        <div className="bg-[#1E1E2D] mt-10 rounded-3xl p-3">
          <div
            className="cursor-pointer text-white p-2 flex justify-between"
            onClick={() => setIsOpen(!isOpen)}
          >
            Image
            <div
              className={`rotate-[${
                isOpen ? "" : "-"
              }90deg] duration-500 ease-in-out`}
            >
              {`<`}
            </div>
          </div>
          <div
            ref={contentRef}
            className="max-h-0 overflow-hidden transition-max-height duration-500 ease-in-out"
          >
            <img
              className="mx-auto"
              src={`https://drive.govt.nz${question.Image}`}
              alt="Question image"
            />
          </div>
        </div>
      )}
      <div className="mt-10 flex flex-col ">
        {question.Answers.map((answer, i) => (
          <div
            key={`choice-${i}`}
            className={`${
              selectedQuestion === i ? "bg-[#0066FF]" : "bg-[#1E1E2D]"
            } text-white py-5 text-center my-2 rounded-full transition ease-in-out`}
            onClick={() => setSelectedQuestion(i)}
          >
            {answer.Answer}
          </div>
        ))}
      </div>
    </div>
  );
};
//#0066FF
export default SingleChoiceQuestion;
