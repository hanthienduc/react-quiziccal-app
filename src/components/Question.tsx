import { QuestionProps } from "../interfaces";
import "./Question.scss"

const Question = ({ question_id, question, choices, handleClick, correctAnswer }: QuestionProps) => {

    const answerElements = choices.map(choice => {
        // check if each answer haven been selected
        return <li onClick={(e) => handleClick(e, question_id, choice.id)}
            key={choice.id}
            className={`${choice.isSelect ? 'select' : ''}
            ${correctAnswer.isShownCorrect && (choice.isSelect && correctAnswer.correct !== choice.content) ? 'show-error' : ''}
             ${correctAnswer.isShownCorrect && correctAnswer.correct === choice.content ? 'show-correct' : ''}
            `} dangerouslySetInnerHTML={{ __html: `${choice.content}` }} />

    })
    return (
        <div className="question-content">
            <h3 className="question-title" dangerouslySetInnerHTML={{ __html: `${question}` }} />
            <ul className="answers">
                {answerElements}
            </ul>
        </div>
    )
}

export default Question