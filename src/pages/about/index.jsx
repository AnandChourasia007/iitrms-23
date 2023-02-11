import './about.css';

function About() {
    return (
        <div className='about'>
            <img src="https://ik.imagekit.io/gu8eutv7q/team.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676112379235" />
            <div className='about_us'>
                <h2 className='main_title'>ABOUT US</h2>
                <p className='text'>The official Formula Student Electric team of IIT Roorkee which participates in the world’s largest Inter-Collegiate Engineering competition conducted by the IMechE and SAE (Formula Student and FSAE, respectively) by designing, fabricating an open-wheel formula-style electric race car.</p>
                <p className='text'>With a burning passion for Engineering Design, a handful of racing enthusiasts came together and started the team’s journey in 2010. The team made its debut in 2011 by participating in FSAE Australasia held in Melbourne, Australia, with an internal combustion engine car. Since then, the team has participated in Formula Student competitions every alternate year - Formula Student UK - 2013 with a Hybrid Car, FSAE Australasia in 2015 with our first fully Electric car, Formula Green in 2017, Formula Green 2020 at Coimbatore, and Formula Bharat 2020, which was conducted remotely due to the pandemic. The Team is now aiming to participate in Formula Bharat, 2023, to be held in Coimbatore.</p>
                <p className='text'>Led by three faculty advisors, the team has now evolved into a group of more than 50 members comprising not only Mechanical and Electrical divisions but also a Media division, working tirelessly to present our work to the world, and a Marketing division, responsible for bringing in sponsors - the financial backbone of the team.</p>
            </div>
            <div className='about_formula_bharat'>
                <div className='formula_bharat_desc'>
                    <img className='formula_bharat_desc_left' src='https://ik.imagekit.io/gu8eutv7q/formulaBharat.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1676120079090' />
                    <div className='formula_bharat_desc_right'>
                        <h2 className='main_title'>ABOUT FORMULA BHARAT</h2>
                        <p className='text'>Formula Student is a student design competition organized by the Institution of Mechanical Engineers (IMechE). It is the world’s largest student engineering design competition which enables students with the unique opportunity to develop their skills in technical designing, manufacturing, research work, team management, communication, and business operations such as budgeting and market research in a real-world environment.</p>
                    </div>
                </div>
                <p className='text' style={{padding: '3vmax 0'}}>In a Formula Student competition, a team and their car are evaluated through Static and Dynamic events -</p>
                <div className='formula_bharat_event'>
                    <div className='formula_bharat_event_tile'>
                        <p className='text'>The Static events consist of Design, Cost, and Business presentations that enable participants to showcase their vehicle design and testing, budget allocation, and marketing strategy know-how.</p>
                    </div>
                    <div className='formula_bharat_event_tile'>
                        <p className='text'>The Dynamic events consist of Skid-pad, Acceleration, Autocross, Efficiency, and Endurance tests. These provide the judges an opportunity to put the teams’ cars to the ultimate test and make them compete with each other in a 22 km track race.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;