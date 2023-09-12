const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="/components/tl-header/shadow.css">
    <ul>
        <li><a href="/">Thon Ly</a></li>
        <li><a href="/siliconwat">Silicon Wat LLC</a></li>
        <li><a href="/333">333 Ltd</a></li>
        <li><a href="/thonly">THonly™</a></li>
        <li><a href="/heartbank">HeartBank®</a></li>
    </ul>
    <nav>
        <h3 onclick="this.getRootNode().host.menu()">Menu</h3> 
        <select onchange="this.getRootNode().host.page(this)">
            <option value="/">Thon Ly</option>
            <option value="/siliconwat/">Silicon Wat LLC</option>
            <option value="/333/">333 Ltd</option>
            <option value="/thonly/">THonly™</option>
            <option value="/heartbank/">HeartBank®</option>
        </select>
    </nav>
`;

export default template;