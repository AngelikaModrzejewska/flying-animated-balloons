import React, {
    Component
} from 'react';

class Animation extends Component {
    state = {
        positionX: 0,
        positionY: 0,
    }

    componentDidMount() {
        document.addEventListener('mousemove', (event) => this.setNewPosition(event))
    }

    componentWillMount() {
        document.addEventListener('mousemove', (event) => this.setNewPosition(event))
    }

    setNewPosition(event) {
        const { clientX, clientY } = event;
        const { ratioX, ratioY } = this.props;

        const windowCenterX = window.innerWidth / 2;
        const windowCenterY = window.innerHeight / 2;

        const positionX = clientX - windowCenterX;
        const positionY = clientY - windowCenterY;

        this.setState({
            positionX: positionX * -ratioX,
            positionY: positionY * -ratioY,
        })
    }

    render() {
        const { className, src } = this.props;
        const { positionX, positionY } = this.state;

        return (
            <img
                className={className}
                src={src}
                style={{
                    transform: `translate(${positionX}px, ${positionY}px)`
                }}
                alt=""
            />
        )

    }
}

export default Animation;