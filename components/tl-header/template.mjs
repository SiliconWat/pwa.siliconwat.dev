const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="/components/tl-header/shadow.css">
    <ul>
        <li><a href="/">Thon Ly Trust</a></li>
        <li><a href="/nhiakou">Nhia Kou LLC</a></li>
        <li><a href="/siliconwat">Silicon Wat Inc</a></li>
        <li><a href="/333">333℠ Ltd</a></li>
        <li><a href="/thonly">THonly™ Inc</a></li>
        <li><a href="/heartbank">HeartBank® Nonprofit</a></li>
    </ul>
    <nav>
        <h3 onclick="this.getRootNode().host.menu()">Menu</h3> 
        <select onchange="this.getRootNode().host.page(this)">
            <option value="/">Thon Ly Trust</option>
            <option value="/nhiakou/">Nhia Kou LLC</option>
            <option value="/siliconwat/">Silicon Wat Inc</option>
            <option value="/333/">333℠ Ltd</option>
            <option value="/thonly/">THonly™ Inc</option>
            <option value="/heartbank/">HeartBank® Nonprofit</option>
        </select>
    </nav>
`;

export default template;