import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="intro-video">
                    <video 
                        poster="/assets/homeVid.jpg" 
                        preload="auto" 
                        autoPlay 
                        muted 
                        loop
                    >
                        <source src="/assets/homeVid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p>Explore the rich cultural heritage and traditions of India through our interactive map.</p>
                <Link to="/map" className="button">Explore the Map</Link>

                <div className="facts-section">
                    <h2>Why India?</h2>
                    <ul>
    <li>Fact 1: India has one of the oldest continuous cultures in the world, with a history spanning over 5,000 years. The Indus Valley Civilization, one of the world's earliest urban cultures, flourished around 2500 BCE.</li>
    
    <li>Fact 2: India is incredibly diverse with 22 officially recognized languages, including Hindi, Bengali, Telugu, and Tamil. There are over 1,600 spoken languages and dialects in the country.</li>
    
    <li>Fact 3: The Indian subcontinent is known for its rich tradition in arts and crafts. Indian art includes classical dance forms like Kathak, Bharatanatyam, and Odissi, as well as unique craft traditions such as Madhubani painting, block printing, and pottery.</li>
    
    <li>Fact 4: India is home to several UNESCO World Heritage Sites, including the Taj Mahal, Qutub Minar, Red Fort, and the historic city of Jaipur, showcasing its rich architectural and cultural heritage.</li>
    
    <li>Fact 5: The country is famous for its festivals which reflect its cultural diversity. Major festivals include Diwali (Festival of Lights), Holi (Festival of Colors), Durga Puja, and Eid, celebrated with unique traditions across different regions.</li>
    
    <li>Fact 6: India boasts a remarkable range of biodiversity. It is home to several national parks and wildlife sanctuaries, such as the Sundarbans, Ranthambore, and Kaziranga, which protect a variety of endangered species like the Bengal tiger, Indian elephant, and one-horned rhinoceros.</li>
    
    <li>Fact 7: Yoga and Ayurveda, ancient practices of physical and mental wellness, originated in India. Yoga is practiced worldwide, while Ayurveda is a traditional system of medicine that uses natural remedies and has been practiced for over 3,000 years.</li>
    
    <li>Fact 8: India’s cuisine is renowned globally for its rich flavors and diverse regional specialties. From spicy curries to sweet desserts like Gulab Jamun and Rasgulla, Indian cuisine offers a vast array of dishes that vary greatly from region to region.</li>
    
    <li>Fact 9: The Indian film industry, popularly known as Bollywood, is one of the largest in the world. Bollywood produces a significant number of films annually and is known for its vibrant music, dance sequences, and dramatic storytelling.</li>
    
    <li>Fact 10: India has a democratic government structure with a multi-tiered federal system. It is the largest democracy in the world, with a diverse population that elects representatives at both the national and local levels.</li>
    
    <li>Fact 11: The Indian economy is one of the fastest-growing major economies in the world. Key sectors include information technology, pharmaceuticals, agriculture, and textiles, making India a significant player in the global market.</li>
    
    <li>Fact 12: India has made significant contributions to science and technology, including the development of space exploration programs. The Indian Space Research Organisation (ISRO) has achieved milestones such as the Mars Orbiter Mission (Mangalyaan) and Chandrayaan lunar missions.</li>
</ul>

                </div>

                <div className="bottom-section">
                    <div className="about-us">
                        <h3>About Us</h3>
                        <p>Learn more about our mission to showcase India's cultural diversity.</p>
                    </div>
                    <div className="contact-us">
                        <h3>Contact Us</h3>
                        <form>
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <textarea placeholder="Your Message"></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Home;
