function changeContent(page)
{
    let contentDiv = document.getElementById('content');

    switch (page)
    {
         case 'home':
             contentDiv.innerHTML =
            `<img src="https://www.hamsci.org/sites/default/files/article/Workshop_2025/HamSCI_2025_v3.png">
                <h2>Welcome to the Magnetometer Management Tool</h2>
                <p>
                    The HamSCI Community is led by The University of Scranton Department of Physics and Engineering W3USR, in collaboration with Case Western Reserve University W8EDU, the University of Alabama, the New Jersey Institute of Technology Center for Solar Terrestrial Physics K2MFF, the MIT Haystack Observatory, TAPR, additional collaborating universities and institutions, and volunteer members of the amateur radio and citizen science communities. We are grateful for the financial support of the United States National Science Foundation, NASA, and Amateur Radio Digital Communications (ARDC).
                </p>
                <p>
                Visit the HamSCI Portal
                <a href="https://www.hamsci.org/" target="_blank">
                here
                </a>.
                </p>
            `;
            break;
        case 'about':
            contentDiv.innerHTML =
               `<h2>About Us</h2>
                <p>
                    This is the about page content. Learn more
                    about our purpose and team.
                </p>
                <p>
                    We are passionate about creating engaging and
                    informative SPAs.
                </p>
            `;
            break;
        case 'contact':
            contentDiv.innerHTML=
               `<h2>Contact Us</h2>
                <p>
                    Feel free to reach out to us!
                </p>
                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Your Message" rows="4" required>
                    </textarea>
                    <button type="submit">Send Message</button>
                </form>`;
            break;

        default:
            contentDiv.innerHTML = '<h2>Page not found!</h2>';
    }
}

document.onload = changeContent;
