import React from 'react'
import classes from './Contacts.module.scss'
import Header from '../../components/Header/Header'
import Heading from '../../components/Heading/Heading'
import Footer from '../../components/Footer/Footer'
import Image from '../../img/E732151C-96E3-41D1-B60D-52CCD4963757.jpeg'

const Contacts = () => {
    return (
        <div className={classes.Contacts}>
            <Header/>

            <main>
                <div className={classes.info}>
                    <Heading>
                        +37129600877
                    </Heading>

                    <div className={classes.name}>
                        <div>Nikitina</div>
                        <div>Sofiya</div>
                    </div>

                    <div className={classes.email}>sofija.nikitina@inbox.lv</div>

                    <div className={classes.job}>JavaScript разработчик</div>

                    <div className={classes.skills}>ES5, ES6, React, HTML5, CSS3, <span style={{color: '#004FEC'}}>Git</span></div>
                </div>

                <div className={classes.picture}>
                    <img src={Image} alt='React Developper'></img>
                </div> 
            </main>

            <Footer/>
        
        </div>
    )
}

export default Contacts