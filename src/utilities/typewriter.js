import React, {Component} from 'react';

class Typewriter extends Component {
    constructor(props) {
        super(props);
        this.state={
            typedText : ' ',
            textsCopy: this.props.texts.slice(),
            period: this.props.speed,
            isDeleting: false,
            loopNum :0
        };
        this.type = this.type.bind(this);
    }

    componentDidMount() {
        this.unmounted = false;
        this.type();
    }

    componentWillUnmount() {
        this.unmounted = true;
    }
    

    type() {
        if(!this.unmounted){
            let i = this.state.loopNum % this.state.textsCopy.length;
            let fullText = this.state.textsCopy[i];
            let delta = 200 - Math.random() * 100;

            if(this.state.isDeleting){
                delta /=2 ;
                this.setState({
                    typedText : fullText.substring(0, this.state.typedText.length - 1)
                });
            }else{
                this.setState({
                    typedText : fullText.substring(0, this.state.typedText.length + 1)
                });
            }

            if(!this.state.isDeleting && this.state.typedText === fullText ){
                delta = this.state.period;
                this.setState({
                    isDeleting :true
                });
            }else if ( this.state.isDeleting && this.state.typedText === ''){
                this.setState({
                    isDeleting:false,
                    loopNum: this.state.loopNum + 1
                });
                delta = 1000;
            }

            setTimeout(() => {
                this.type();
            }, delta);
        }
    }

    render() {
        return React.createElement(this.props.tag, {className: 'typewriter'}, this.state.typedText);
    }
}

Typewriter.defaultProps = {
    speed: 100,
    randomSpeed: false,
    tag: 'p'
};

export default Typewriter;