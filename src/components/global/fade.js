import { injectGlobal, keyframes } from 'styled-components';

const transitionClassName = 'slide';
const duration = 1000;

const slideOut = keyframes`
    0% { }
    25% { opacity: .75; transform: translateZ(-100px); }
    50% { opacity: .5; transform: translateZ(-200px); }
    75% { opacity: .25; transform: translateZ(-250px); }
    100% { opacity: 0; transform: translateZ(-300px); }
`;

const slideIn = keyframes`
   0%{ opacity: 0; transform :translateZ(-300px)}
   25%{ opacity: 0.25; transform :translateZ(-250px)}
   50%{ opacity: 0.5; transform :translateZ(-200px)}
   75%{ opacity: 0.75; transform :translateZ(-100px)}
   100%{ opacity: 1; transform :translateZ(0)}
`;

injectGlobal`
    .${transitionClassName}-exit-active {
    animation: ${slideOut} ${duration}ms both ease;
    };

    .${transitionClassName}-enter-active {
        animation: ${slideIn} ${duration}ms both ease;
    }
`;

export { transitionClassName, duration }