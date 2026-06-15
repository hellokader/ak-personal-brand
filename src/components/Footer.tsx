export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="ftop">
          <div>
            <div className="bd">
              <span className="mk" />
              Abdul Kader
            </div>
            <p>
              Independent Google Ads consultant for local businesses. Dhaka →
              worldwide. Currently working with 14 local businesses.
            </p>
            <p
              className="mono"
               style={{
                fontSize: "10px",
                letterSpacing: ".1em",
                color: "#5f706b",
                marginTop: "8px",
              }}
            >
              ● 3 spots open this quarter
            </p>
          </div>
          <div className="fcol">
            <h5>Menu</h5>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#writing">Writing</a>
            <a href="#book">Contact</a>
          </div>
          <div className="fcol">
            <h5>Services</h5>
            <a href="#">Local Search Ads</a>
            <a href="#">Call Tracking</a>
            <a href="#">Business Profile</a>
            <a href="#">Service Ads</a>
            <a href="#">Reviews</a>
          </div>
          <div className="fcol">
            <h5>Elsewhere</h5>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter / X</a>
            <a href="#">YouTube</a>
            <a href="#">Newsletter</a>
          </div>
        </div>
        <div className="fbot">
          <span>© 2026 Abdul Kader · All rights reserved</span>
          <span>Built in Dhaka · Made by hand</span>
        </div>
      </div>
    </footer>
  );
}
