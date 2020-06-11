import React from 'react'
import classes from './ErrorPage.module.scss'
import Header from '../../components/Header/Header'
import Heading from '../../components/Heading/Heading'
import Footer from '../../components/Footer/Footer'

const ErrorPage = () => (
<div className={classes.ErrorPage}>
    <Header/>
    <Heading>
        Something went wrong, try again later!
    </Heading>
    <Footer/>
</div>
)

export default ErrorPage