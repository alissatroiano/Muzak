import React, { Component } from 'react';
import { sendLog } from './utils';

const Context = React.createContext('');
export const LogContext = Context;

class Logger extends Component {
   componentDidMount() {
       // some code that calls sendLogger
   }

   setupObserver() {
    this.observer = new IntersectionObserver(this.observerCallback, {
        root: null,
        rootMargin: '0px',
        threshold: 0,
    });

    const wrappedDOMElements = this.logDOMElementRef?.current?.childNodes;
    const firstVisibleElement = find(wrappedDOMElements, (el) => el.offsetParent !== null);

    if (firstVisibleElement) {
        this.observer.observe(firstVisibleElement);
    }
    constructor(props) {
        super(props);
 
        this.logDOMElementRef = React.createRef();
        this.state = { isInViewport: false };
        this.hasImpressionAlreadyBeenLogged = false;
        this.observerCallback = this.observerCallback.bind(this);
    }
 
    observerCallback(entries) {
        const entry = entries[0];
 
        if (entry !== undefined && this.state.isInViewport !== entry.isIntersecting) {
            this.setState(() => ({
                isInViewport: entry.isIntersecting,
            }));
        }
    }
}

componentDidUpdate() {
    if (
        this.props.logImpression &&
        this.state.isInViewport &&
        !this.hasImpressionAlreadyBeenLogged
    ) {
        sendLog(this.combinedProps);
        this.hasImpressionAlreadyBeenLogged = true;
    }
}
render() {
       const { children, ...directProps } = this.props;

       return (
           <LogContext.Consumer>
               {(consumedProps) => {
                   const combinedProps = { ...consumedProps, ...directProps };
                   return <LogContext.Provider value={combinedProps}>{children}</LogContext.Provider>;
               }}
           </LogContext.Consumer>
       );
   }
}

export default Logger;