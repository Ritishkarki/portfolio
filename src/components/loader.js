import React from 'react';
import styled from 'styled-components';
export const Loader = () =>(
    <Loading className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </Loading>
);

const Loading = styled.div`
    position: relative;
	display: grid;
	left:50%;
	top:50%;
	transform:translate(-50%, 50%);
	grid-template-columns: 33% 33% 33%;
	grid-gap: 2px;
	width: 100px;
	height: 100px;
	
	> div {
		position: relative;
		display: inline-block;
		width: 100%;
		height: 100%;
		background: #4b21ff;
		transform: scale(0.0);
		transform-origin: center center;
		animation: loader 2s infinite linear;
		
		&:nth-of-type(7) {}
		
		&:nth-of-type(1),
		&:nth-of-type(5), 
		&:nth-of-type(9) {
			animation-delay: 0.4s;
		}
		
		&:nth-of-type(4),
		&:nth-of-type(8) {
			animation-delay: 0.2s;
		}
		
		&:nth-of-type(2),
		&:nth-of-type(6) {
			animation-delay: 0.6s;
		}
		
		&:nth-of-type(3) {
			animation-delay: 0.8s;
		}
    } 
    @keyframes loader {
        0%   { transform: scale(0.0); }
        40%  { transform: scale(1.0); }
        80%  { transform: scale(1.0); }
        100% { transform: scale(0.0); }
    }
`;