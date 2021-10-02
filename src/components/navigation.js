import * as React from "react"


function NavElem(props) {

    return (
        <li
            className={props.selected ? 'selected': ''}
        >
            <a href={"#"+props.page.key} onClick={props.onClick}>{props.page.name}</a>
        </li>
    )
}

class Navigation extends React.Component {

    render() {
        const elems = this.props.pages.map((page) => <NavElem
            key={page.key}
            page={page}
            selected={page.key===this.props.currentPage}
            onClick={() => this.props.onClick(page.key)}
        />);
        return (
            <nav>
                <ul>
                    {elems}
                </ul>
            </nav>
        );
    }

}

export default Navigation
