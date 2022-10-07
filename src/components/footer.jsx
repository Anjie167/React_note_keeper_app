import React from "react";

function Footer() {
    let date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <p>
                Copyright © {year}
            </p>
        </footer>
    );
}

export default Footer;