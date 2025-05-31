import React from 'react';
import { Link } from 'react-router-dom';
import standingImage from './standing.png'; 
import seatedImage from './seated.png'; 
import hipsImage from './hips.png'; 
import relaxImage from './relax.png'; 
import twistImage from './twist.png'; 
import supineImage from './supine.png'; 
import proneImage from './prone.png'; 
import balanceImage from './balance.png'; 
import './Categories.css'; 
import standingAsanas from '../data/standingAsana';
import balanceAsanas from '../data/balanceAsana';
import supineAsanas from '../data/supineAsana';
import relaxAsanas from '../data/relaxAsana';
import hipsAsanas from '../data/hipsAsana';
import seatedAsanas from '../data/seatedAsana';
import proneAsanas from '../data/proneAsana';
import twistAsanas from '../data/twistAsana';


const categories = [
  {
    name: 'Standing',
    image: standingImage,
  },
  {
    name: 'Seated',
    image: seatedImage,
  },
  {
    name: 'Hips',
    image: hipsImage,
  },
  {
    name: 'Relax',
    image: relaxImage,
  },
  {
    name: 'Twist',
    image: twistImage,
  },
  {
    name: 'Supine',
    image: supineImage,
  },
  {
    name: 'Prone',
    image: proneImage,
  },
  {
    name: 'Balance',
    image: balanceImage,
  },
];

const Categories = () => {
  return (
    <div className="categories">
      <h2>Категори</h2>
      <div className="category-cards">
        <Link to="/categories/standing" className="category-link">
          <div className="category-card">
            <img src={standingImage} alt="Standing Yoga" />
            <h3 className="category-name">Зогсоо байрлалууд</h3>
          </div>
        </Link>
        <Link to="/categories/seated" className="category-link">
          <div className="category-card">
            <img src={seatedImage} alt="Seated Yoga" />
            <h3 className="category-name">Суусан байрлалууд</h3>
          </div>
        </Link>
        <Link to="/categories/prone" className="category-link">
          <div className="category-card">
            <img src={proneImage} alt="Prone Yoga" />
            <h3 className="category-name">Хойш гэдийх байрлалууд</h3>
          </div>
        </Link>
        <Link to="/categories/twist" className="category-link">
          <div className="category-card">
            <img src={twistImage} alt="Twist Yoga" />
            <h3 className="category-name">Мушгирах байрлалууд</h3>
          </div>
        </Link>
        <Link to="/categories/balance" className="category-link">
          <div className="category-card">
            <img src={balanceImage} alt="Balance Yoga" />
            <h3 className="category-name">Гарын тэнцвэрийн байрлалууд</h3>
          </div>
        </Link>
        <Link to="/categories/hips" className="category-link">
          <div className="category-card">
            <img src={hipsImage} alt="Hips Yoga" />
            <h3 className="category-name">Ташаа сунгах байрлалууд</h3>
          </div>
        </Link>
        <Link to="/categories/supine" className="category-link">
          <div className="category-card">
            <img src={supineImage} alt="Supine Yoga" />
            <h3 className="category-name">Урвуу байрлалууд</h3>
          </div>
        </Link>
        <Link to="/categories/relax" className="category-link">
          <div className="category-card">
            <img src={relaxImage} alt="Relax Yoga" />
            <h3 className="category-name">Амраах байрлалууд</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}



export default Categories;


