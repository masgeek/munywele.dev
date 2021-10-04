import React from "react"


class Wrapper extends React.Component {

    render() {
        const active = this.props.active ? 'contentWrapper activePage' : 'contentWrapper';
        return (
            <div className={active}>
                {this.props.children}
            </div>
        );
    }
}

export default Wrapper