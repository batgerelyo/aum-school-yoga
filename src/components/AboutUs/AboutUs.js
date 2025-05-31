import React from 'react';
import './AboutUs.css';
import maral from './maral.jpeg';
import tumee from './tumee.jpeg';

const teachers = [
  {
    name: 'О.МАРАЛ',
    photo: maral,
    instagramLink: 'https://www.instagram.com/maral_yoga/',
    facebookLink: 'https://www.facebook.com/maral_yoga/',
    bio: 'О.Марал багш 2009 оноос эхлэн бясалгал иог сонирхож эхэлсэн бөгөөд 2013 оноос хойш тогтмол садханагаа үргэлжлүүлж байна. 2015 оноос хойш иогийн уламжлалт мэдлэг болоод орчин үеийн аргуудыг хослуулсан хатха иог, повер иог, виньяаса урсгал ,ахисан шатны иог, агаарын иог болон иогийн багш бэлтгэх сургалтуудад онол практикын хичээлүүдийг заадаг. Хамрагдсан албан ёсны сургалтуудаас дурдвал: 2015 НиНо Амо багшийн The heart and Art of teaching Yoga 20 цагийн YACEP хөтөлбөр, 2016 Суман Бархас багшийн Tai Chi Yoga center сургуулийн 200 цагийн програм.'
  },
  {
    name: 'Б.ТҮМЭНДЭМБЭРЭЛ',
    photo: tumee,
    instagramLink: 'https://www.instagram.com/aum_tumee/',
    facebookLink: 'https://www.facebook.com/TumkaYogini',
    bio: 'Олон улсын Yoga Alliance байгууллагын E-RYT-500, YACEP, RYS200 зэрэгтэй. Иогийн багш бэлтгэх болон багш нарт нэмэлт сургалт явуулах эрх бүхий бүртгэлтэй. 2011 оноос иогоор хичээллэж эхэлсэн. 2016  Lotus yoga төвийн 200 цагийн багш бэлтгэх сургалт. 2018 Энэтхэг улсын  Kailash Tribal School of Yoga & Holistic Health сургуулийн Advanced Yoga Teacher Training Course 300-Hour болон Holistic Himalayan Sound healing 50-Hour. 2019 АНУ-ын  Kindness Yoga 200-Hour vinyasa yoga Teacher Training Program. 2019 Yoga therapy back pain management-YACEP. 2019, 2020 IYSM-YACEP.2020 Wall rope yoga-YACEP 2020 Aerial yoga YACEP. ',
  },
];

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>Багш нарын тухай</h2>
      <div className="teacher-list">
        {teachers.map((teacher, index) => (
          <div key={index} className="teacher-info">
            <div className="teacher-photo">
              <img src={teacher.photo} alt={teacher.name} />
            </div>
            <div className="teacher-name">
              {teacher.name}
            </div>
            <div className="teacher-bio">
              {teacher.bio}
            </div>
            <div className="social-links">
              <a href={teacher.instagramLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <span className="social-link-separator"></span> {/* Add a separator */}
              <a href={teacher.facebookLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
