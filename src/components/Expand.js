import { useState } from "react"


const Expand = () => {
    const [expand, setExpand] = useState(false)
    const [expandBigger, setExpandBigger] = useState(false)
    const button = document.getElementsByTagName('button')

    const goBig = () => {
        if (!expand) {
            button[0].innerHTML = '-'
        }
        else {
            button[0].innerHTML = '+'
        }
        setExpand(!expand)
        setExpandBigger(false)
        button[1].innerHTML = '+'
    }

    const goBigger = () => {

        setExpandBigger(!expandBigger)

        if (!expandBigger) {
            button[1].innerHTML = '-'
        }
        else {
            button[1].innerHTML = '+'
        }
    }





    return (
        <section>
            <article>
                <div>
                    <p className="question">Why is React great?</p>
                    <button onClick={goBig}>+</button>
                </div>

                <div style={!expand ? { display: 'none' } : null}>
                    <p>Fast Learning Curve</p>
                    <button onClick={goBigger}>+</button>

                    <div style={!expandBigger ? { display: 'none' } : null}>
                        <p>Lorem10</p>
                    </div>
                </div>
            </article>
        </section >
    )
}


export default Expand