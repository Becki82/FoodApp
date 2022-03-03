import React from 'react';
import DogBiscuits from '../../Assets/DogBiscuits.jpeg';
import classes from './Header.module.css';
import { Fragment } from 'react';

const Header =(props)=> {
   return ( <Fragment>
       <header className={classes.header}>
           <h1>Nanooks Diner</h1>
           <button>Basket</button>
       </header>
       <div className={classes['main-image']}>
           <img src={DogBiscuits} alt="Fancy Dog Biscuits" />
       </div>





    </Fragment>
   )



};


export default Header;