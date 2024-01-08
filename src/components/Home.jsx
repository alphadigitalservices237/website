import Nav from "./normal_components/Nav";
export default function Home()
{
    return (
        <body>
            <Nav/>
            <section class="help">
                <div class="help-text-container">
                    <span class="help-text">
                        How can we help?
                    </span>
                </div>
                <div class="search">
                    <input type="search" name="search" id="search" placeholder="search"/>
                    <button type="submit" id="arrow">B</button>
                </div>
            </section>
        </body>
    )
}