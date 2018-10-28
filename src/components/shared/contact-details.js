import React from 'react';
import styled from 'styled-components';
import facebook from '../../assets/icons/facebook.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import insta from '../../assets/icons/instagram.svg';
import github from '../../assets/icons/github.svg';

const ContactDetails = () => (
    <Wrapper>
        <div>
            <h6>Email</h6>
            <h4><a href="">karki.ritish@gmail.com</a></h4>
        </div>
        <div>
            <h6>Contact Number</h6>
            <h4><a href="">+977-9841378875</a></h4>
        </div>
        <div className="social">
            <h6>Find Me On</h6>
            <a href="https://github.com/Ritishkarki"><img src={github} alt="github"/></a>
            <a href="https://www.linkedin.com/in/ritish-karki-70ba18b0/"><img src={linkedin} alt="linkedin"/></a>
            <a href="https://www.facebook.com/ritish.karki"><img src={facebook} alt="facebook"/></a>
            <a href="https://www.instagram.com/ritishkarki/"><img src={insta} alt="instagram"/></a>
        </div>
    </Wrapper> 
);

export default ContactDetails;

const Wrapper=styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    color:#e6e6e6;
    font-size: 1.3rem;
    >div{
        margin-bottom:30px;
        a{
            color:#e6e6e6;
            display:block;
            margin-top:10px;
            text-decoration:none;
        }
    }
    .social{
        margin-bottom:0;
        a{
            display:inline-block;
            margin-right:25px;
            width:30px;
            img{
                width:100%;
            }
            &:last-of-type{
                margin-right:0;
            }
        }
    }
`;