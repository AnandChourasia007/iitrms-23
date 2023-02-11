import TeamCard from '../../components/teamCard';
import './team.css';

function Team() {
    return (
        <div className='team'>
            <div style={{padding: '3vmax 4vmax 3vmax 8vmax'}}>
                <p className='main_team_title'>IIT Roorkee Motorsports Team</p>
                <p className='main_team_desc'>The people who are making this possible</p>
            </div>
            <div className='team_verticals'>
                <div className='vertical'>
                    <div className='vertical_title'>
                        <p className='text'>Faculty Advisor</p>
                    </div>
                    <div className='vertical_member'>
                        <TeamCard name="Name" position="Position"/>
                        <TeamCard name="Name" position="Position"/>
                        <TeamCard name="Name" position="Position"/>
                        <TeamCard name="Name" position="Position"/>
                    </div>
                </div>
                <div className='vertical'>
                    <div className='vertical_title'>
                        <p className='text'>Management</p>
                    </div>
                    <div className='vertical_member'>
                        <TeamCard name="Name" position="Position"/>
                        <TeamCard name="Name" position="Position"/>
                        <TeamCard name="Name" position="Position"/>
                        <TeamCard name="Name" position="Position"/>
                    </div>
                </div>
                <div className='vertical'>
                    <div className='vertical_title'>
                        <p className='text'>Electrical</p>
                    </div>
                    <div className='vertical_member'>
                        <TeamCard name="Name" position="Position"/>
                        <TeamCard name="Name" position="Position"/>
                        <TeamCard name="Name" position="Position"/>
                    </div>
                </div>
                <div className='vertical'>
                    <div className='vertical_title'>
                        <p className='text'>Mechanical</p>
                    </div>
                    <div className='vertical_member'>
                        <TeamCard name="Name" position="Position"/>
                        <TeamCard name="Name" position="Position"/>
                        <TeamCard name="Name" position="Position"/>
                    </div>
                </div>
                <div className='vertical'>
                    <div className='vertical_title'>
                        <p className='text'>Marketing</p>
                    </div>
                    <div className='vertical_member'>
                        <TeamCard name="Name" position="Position"/>
                        <TeamCard name="Name" position="Position"/>
                        <TeamCard name="Name" position="Position"/>
                    </div>
                </div>
                <div className='vertical'>
                    <div className='vertical_title'>
                        <p className='text'>Media</p>
                    </div>
                    <div className='vertical_member'>
                        <TeamCard name="Name" position="Position"/>
                        <TeamCard name="Name" position="Position"/>
                    </div>
                </div>
                <div className='vertical'>
                    <div className='vertical_title'>
                        <p className='text'>Videography</p>
                    </div>
                    <div className='vertical_member'>
                        <TeamCard name="Name" position="Position"/>
                        <TeamCard name="Name" position="Position"/>
                    </div>
                </div>
                <div className='vertical'>
                    <div className='vertical_title'>
                        <p className='text'>Web Development</p>
                    </div>
                    <div className='vertical_member'>
                        <TeamCard name="Name" position="Position"/>
                        <TeamCard name="Name" position="Position"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;