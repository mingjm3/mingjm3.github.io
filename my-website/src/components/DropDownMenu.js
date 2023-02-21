import "./DropDownMenu.css";

export default function DropDownMenu(props) {
    const data = props.data;

    const items = Array.from(data).map(([name, url]) => (
          <a href={url} key={name}> {name} </a>
    ));

    return (
        <div class="dropdown">
            <div class="dropdown-content">
                {items}
            </div>
        </div>
    );
}