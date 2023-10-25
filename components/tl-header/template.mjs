const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="/components/tl-header/shadow.css">
    <ul>
        <li><a href="/">Thon Ly DBA</a></li>
        <li><a href="/siliconwat">Silicon Wat LLC</a></li>
        <li><a href="/333">333 Ltd</a></li>
        <li><a href="/thonly">THonly™ Inc</a></li>
        <li><a href="/heartbank">HeartBank® Trust</a></li>
    </ul>
    <nav>
        <h3 onclick="this.getRootNode().host.menu()">Menu</h3> 
        <select onchange="this.getRootNode().host.page(this)">
            <option value="/">Thon Ly DBA</option>
            <option value="/siliconwat/">Silicon Wat LLC</option>
            <option value="/333/">333 Ltd</option>
            <option value="/thonly/">THonly™ Inc</option>
            <option value="/heartbank/">HeartBank® Trust</option>
        </select>
    </nav>
`;

export default template;