import React from 'react';
import 'tachyons';


const Footer = () => {
    return (
        <footer class="pv4 ph3 ph5-m ph6-l mid-gray">
            <small class="f6 db tc">© 2021 <b class="ttu">Stomble Inc</b>., All Rights Reserved</small>
            <div class="tc mt3">
                <a href="/Language/" title="Language" class="f6 dib ph2 link mid-gray dim">Language</a>
                <a href="/Terms/"    title="Terms" class="f6 dib ph2 link mid-gray dim">Terms of Use</a>
                <a href="/Privacy/"  title="Privacy" class="f6 dib ph2 link mid-gray dim">Privacy</a>
            </div>
        </footer>

    );
};

export default Footer;