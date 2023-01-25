import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: ''
        };
    };

    // static getDerivedStateFromError(error) {
    //     return {hasError: true};
    // };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    };

    render() {
        if (this.state.error) {
            const stack = this.state.errorInfo.componentStack.split('\n');
            return (
                <>
                    <details>
                        {this.state.error.message}
                        <br/>
                        <>
                            {
                                stack.map((item, index) => {
                                    return <p>{item.trim()}</p>
                                }) 
                            }
                        </>
                    </details>
                </>
            );
        } else {
            return this.props.children;
        }
    };
};

export default ErrorBoundary;