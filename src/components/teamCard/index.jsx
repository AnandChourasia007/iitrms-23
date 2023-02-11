import './teamCard.css';
import photo from '../../assets/photo.svg';
import mail from '../../assets/icons/mail.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import linkedin from '../../assets/icons/linkedin.svg';

function TeamCard({name, position}) {
    return (
        <div className='member_card'>
            <div className='photo'>
                <img src={photo} />
                <div className='photo_overlay'>
                    <div className='socials'>
                        <a><img src={mail} /></a>
                        <a><img src={facebook} /></a>
                        <a><img src={instagram} /></a>
                        <a><img src={linkedin} /></a>
                    </div>
                </div>
            </div>
            <p className='member_name'>{name}</p>
            <p className='member_position'>{position}</p>
        </div>
    )
}

export default TeamCard;