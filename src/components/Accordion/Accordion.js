import React, {useState} from 'react';
import '../../styles/components/_accordian.scss';

const data = [
    {
        title: 'title',
        contect: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled'
    },
    {
        title: 'title',
        contect: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled'
    }, {
        title: 'title',
        contect: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled'
    }
]


function Accordion(props) {
    const [clicked, setClicked] = useState(null)
    const toggle = (val) => {
        if (clicked === val) {
            return setClicked(null)
        }
        setClicked(val)
    }
    return (
        <div className={`accWrapper`}>
            {data.map((item, index) =>
                <div>
                    <div
                        className={[`headerClass`, clicked === index ? `headerClass_open` : `headerClass_close`].join(' ')}
                        onClick={() => toggle(index)}>
                        <p>{item.title}</p>
                        {clicked === index ? (<span>-</span>) : (<span> + </span>)}
                    </div>
                    <div className={clicked === index ? `contentOpen` : `contentClose`}> <p>{item.contect}</p> </div>
                </div>
            )
            }
        </div>);
}

export default Accordion;