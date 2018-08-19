import React from 'react';
import styled from 'styled-components';

const Burger = props => {
	return (
		<Content
			color={props.color}
			heightIcon={props.heightIcon}
			widthLine={props.widthLine}
			widthIcon={props.widthIcon}
			heightLine={props.heightLine}
			transitionTime={props.transitionTime}
		>
			<a
				title="Menu"
				className={props.isOpen ? 'hamburger-icon active' : 'hamburger-icon'}
			>
				<span className="line line-1" />
				<span className="line line-2" />
				<span className="line line-3" />
			</a>
		</Content>
	);
};

Burger.defaultProps = {
	color: '#1565ea',
	heightIcon: '48',
	widthIcon: '48',
	widthLine: '38',
	heightLine: '3',
	transitionTime: '0.4'
};

export default Burger;

const Content = styled.div`
    width: ${props => props.widthIcon}px;
    height: ${props => props.heightIcon}px;
    margin:20px 20px 0 auto;
    .hamburger-icon {
        width: ${props => props.widthIcon}px;
        height: ${props => props.heightIcon}px;
        position:relative;
        cursor:pointer;
        display:block;
        .line {
            display: block;
            background: ${props => props.color};
            width: ${props => props.widthLine}px;
            height: ${props => props.heightLine}px;
            position: absolute;
            left: calc((${props => props.widthIcon - props.widthLine}px / 2));
            border-radius: calc((${props => props.heightLine}px / 2));
            transition: all ${props => props.transitionTime}s;
            -webkit-transition: all ${props => props.transitionTime}s;
            -moz-transition: all ${props => props.transitionTime}s;
            &.line-1 {
                top: 5px;
            }
            &.line-2 {
                top: 15px;
            }
            &.line-3 {
                top: 25px;
            }
        }    
        &.active {
            .line{
                background:#ffffff;
                &.line-1 {
                    transform: translateY(11px) translateX(0px) rotate(45deg);
                    -webkit-transform: translateY(11px) translateX(0px) rotate(45deg);
                    -moz-transform: translateY(11px) translateX(0px) rotate(45deg);
                }
                &.line-2 {
                    opacity: 0;
                    display:none;
                }
                &.line-3 {
                    transform: translateY(-9px) translateX(0) rotate(-45deg);
                    -webkit-transform: translateY(-9px) translateX(0) rotate(-45deg);
                    -moz-transform: translateY(-9px) translateX(0) rotate(-45deg);
                }
            }
        }
    }
`;