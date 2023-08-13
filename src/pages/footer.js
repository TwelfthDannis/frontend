import "../style/footer.css"
import vk from "../Icons/vk.svg"
import tg from "../Icons/telegram.svg"
import mail from "../Icons/email.png"

export default function footer() {
    return (
        <div className="footer">
            <div className="line"/>
            <div className="contact">
                <div className="icon-contact">
                    <a href={'https://vk.com/dannis12'} target="_blank" rel="noreferrer"><img className={'icon-message'} src={vk} alt={'vk'}/></a>
                    dannis12
                </div>
                <div className="icon-contact">
                    <a href={'https://t.me/dannistwelfth'} target="_blank" rel="noreferrer"><img className={'icon-message'} src={tg} alt={'telegram'}/></a>
                    dannistwelfth
                </div>
                <div className="icon-contact">
                    <a href={'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTKWbbCMBvgMPGdbsThTWGbLMbBxjMfZzJdXpbXdsWTrvzZBnzHmjqRlNWtMTSPLKfKWbB'} target="_blank" rel="noreferrer"><img className={'icon-message'} src={mail} alt={'email'}/></a>
                    danyadannis@gmail.com
                </div>
            </div>
        </div>
    )
}