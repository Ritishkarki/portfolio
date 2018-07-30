import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { transitionClassName, duration } from './fade';

// the childFactory allows to change the transition of the leaving component
const childFactoryCreator = (props) => child => React.cloneElement(child, props);

let transitionName = transitionClassName;
let transitionDuration = duration;

export default ({ transition = transitionName, duration = transitionDuration, pageKey, children }) => (
  <TransitionGroup childFactory={childFactoryCreator({ classNames: transition, timeout: duration })} >
    <CSSTransition key={pageKey} timeout={transitionDuration} >
      <div>{ children }</div>
    </CSSTransition>
  </TransitionGroup>
)
export {default as baseStyles} from './global';