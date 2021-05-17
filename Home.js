import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'


function Home() {
    return (
        <div className='home'>
            <Banner />

            <div class="home_section">
                <Card 
                src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=480"               
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
                />
                <Card 
                src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
                />
                <Card 
                src="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=480"
                title="Entire Homes"
                description="Comfortable private places, with room for friends or family."
                />
            </div>
            <div class="home_section">
                <Card
                 src="https://a0.muscache.com/im/pictures/172038eb-f485-4bf7-a877-4022495cd746.jpg?im_w=720"
                 title="Penthouse in london"
                 description="Enjoy the amazing sights of london with this stunning penthouse"
                 price="$350/night"
                 />
                <Card 
                src="https://a0.muscache.com/im/pictures/miso/Hosting-33450679/original/9b7cd886-36e2-41d4-90b8-fd1caf4cdbc5.jpeg?im_w=720"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabulous shopping complex nearby"
                price="$70/night"
                />
                <Card 
                src="https://a0.muscache.com/im/pictures/f097d2df-4f6e-456b-8c08-f33e409c0ddf.jpg?im_w=720"
                title="3 Bedroom flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$138/night"
                />
            </div>
        </div>
    )
}

export default Home
