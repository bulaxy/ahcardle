import './assets/answerBoxes.css'
import {useEffect, useRef} from "react";
export const AnswerBoxes = (props) => {
    const timeoutRef = useRef(null)
    let answer = props.answer[0]
    // console.log('11',answer)
    let finalAnswer = props.finalAnswer
    const cardName = answer.cardName.join('').replace(/[.'" ]/g, '')
    const adjustClass = (specAns) => {
        const commonElements = answer[specAns].filter((el) => finalAnswer[specAns].includes(el));
        const areEqual = answer[specAns].length === finalAnswer[specAns].length && commonElements.length === finalAnswer[specAns].length
        if (areEqual) {
            return 'makeGreen'
        } else if (commonElements.length > 0) {
            return 'makeYellow';
        } else {
            if(['xp', 'cost', 'wild', 'intellect', 'willpower', 'combat','agility'].includes(specAns)){
                let arrow
                answer[specAns][0] < finalAnswer[specAns][0] ? arrow = 'yearBefore' : arrow = 'yearAfter'
                return `makeRed ${arrow}`
            }
            else return 'makeRed';
        }
    }

    useEffect(() => {
        for (let i = 0; i < timeoutRef.current.children.length; i++){
            const delay = i * 300;
            setTimeout(() => {
                timeoutRef.current.children[i].classList.add('reveal')
            },delay)
        }
    },[])

    const displayedAnswer = (property) => {
        return (
            <td className={adjustClass(property)}>
                <div>
                {(answer[property]).length > 1 ? (answer[property]).join(', ') : answer[property]}
                </div>
            </td>
        )
    }

    return(
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Card</th>
                        <th>Type</th>
                        <th>Class</th>
                        <th>xp</th>
                        <th>Traits</th>
                        <th>Slot</th>
                        <th>cost</th>
                        <th>Agility</th>
                        <th>Combat</th>
                        <th>Intellect</th>
                        <th>Wild</th>
                        <th>Willpower</th>
                    </tr>
                    <tr ref={timeoutRef}>
                        <td className='champImg'> {/*ADD IMG PROPERTY TO EACH OBJECT AND SEARCH WITH IT */}
                            {answer.cardName}
                        </td>
                        {displayedAnswer('typeName')}
                        {displayedAnswer('class')}
                        {displayedAnswer('xp')}
                        {displayedAnswer('traits')}
                        {displayedAnswer('slot')}
                        {displayedAnswer('cost')}
                        {displayedAnswer('agility')}
                        {displayedAnswer('combat')}
                        {displayedAnswer('intellect')}
                        {displayedAnswer('wild')}
                        {displayedAnswer('willpower')}
                    </tr>
                </tbody>
            </table>
        </>
    )
}
