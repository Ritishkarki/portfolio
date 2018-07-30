import base from './base';
import {injectGlobal} from 'styled-components';

const baseStyles = () => injectGlobal`
    ${base}
`;


export default baseStyles;