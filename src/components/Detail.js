import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if (location.stat === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.stat === undefined) {
            return null;
        } else {
            return <span>{location.stat.title}</span>;
        }
    }
}

export default Detail;