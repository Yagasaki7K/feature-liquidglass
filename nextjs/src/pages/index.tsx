import BtnPlus from '@/components/BtnPlus'
import React from 'react'
import styled from 'styled-components'

const HomeDetails = styled.div`

    .bg {
        position:absolute;
        inset:0;
        z-index:-1
    }

    .bg img {
        width:100%;
        display:block
    }

    .glass {
        position:fixed;
        inset:50% auto auto 50%;
        transform:translate(-50%,-50%);
        width:20rem;
        height:20rem;
        border-radius:50%;
        background:rgba(255,255,255,.08);
        border:2px solid transparent;
        box-shadow:0 0 0 2px rgba(255,255,255,.6),0 16px 32px rgba(0,0,0,.12);
        backdrop-filter:url(#frosted);
        -webkit-backdrop-filter:url(#frosted);
        display:grid;
        place-items:center;
        cursor:pointer;
        outline:0;
    }

    .glass::before,
    .glass::after {
        content:"";
        position:absolute;
        width:40%;
        height:10px;
        background:#fff;
        border-radius:10px;
    }

    .glass::after {
        transform:rotate(90deg)
    }
`

const Index = () => {
    return (
        <HomeDetails>
            <div className="bg">
                <img src="/apple.jpg" alt=""/>
                <img src="/galaxy.jpg" alt=""/>
                <img src="/pastel.jpg" alt=""/>
                <img src="/water.jpg" alt=""/>
            </div>

            <button id="btn" className="glass"></button>
            <BtnPlus/>
        </HomeDetails>
    )
}

export default Index
