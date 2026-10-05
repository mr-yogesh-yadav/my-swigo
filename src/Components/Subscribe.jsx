import "./Subscribe.css"
function Subscribe(){
    return(
        <>
        <section className="subscribe">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Subscribe to get update, offers notification and information.</p>
            <div className="subscribe-g">
                <input type="email" placeholder="Enter Your Email"></input>
                <button className="btn"><span>Subscribe</span></button>
            </div>
            <div className="subscribe-b">
                <h3>Any Special Requirement</h3>
                <span>Write us At<a href="https://support.w3itexperts.com/" target="blank">DexignZone Support</a></span>
            </div>
        </section>
        </>
    )
}
export default Subscribe;