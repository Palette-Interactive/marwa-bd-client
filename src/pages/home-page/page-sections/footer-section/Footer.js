import React from "react";
import "./Footer.css";
import marwaLogo from "../../../../assets/marwa_logo_v2.png";

const footerLinks = [
 
  {
    id: 1,
    title: "Get In Touch with Us",
    list: [
      "H-2/B, Road No.-13, Nikunja-2, Khilkhet, Dhaka",
      "+880 2-8900470",
      "marwakabab@gmail.com"
    ],
  },
  {
    id: 2,
    title: "Opening Hours",
    list: [
      "Monday:  12:00 – 11:00 PM",
      "Tuesday:  12:00 – 11:00 PM",
      "Wednesday:  12:00 – 11:00 PM",
      "Thursday:  12:00 – 11:00 PM",
      "Friday:  12:00 – 11:00 PM",
      "Saturday:  12:00 – 11:00 PM",
      "Sunday:  12:00 – 11:00 PM"
    ],
  },
  {
    id: 3,
    title: "Bookings Available for",
    list: [
      "Weddings",
      "Holuds",
      "Receptions",
      "Birthday",
      "Anniversary",
      "Corporate Event",
      "Press Event",
    ],
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="footer_inner">
        <div className="footer_disclaimer">
          <strong>Disclaimer:</strong> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. In repellat amet minus tempore, necessitatibus
          eligendi.lorem15
        </div>
        <div className="footer_links">
          <div className="footer_row" id="aboutUsFooter">
            <h6>About Us</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime voluptatem quos officia nesciunt soluta. Impedit velit labore provident magni dolorem reiciendis placeat et aliquam neque!
            </p>
          </div>
          {footerLinks.map((link) => (
            <div className="footer_row" key={link.id}>
              <h6>{link.title}</h6>
              <ul>
                {link.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer_bottom">
          <img src={marwaLogo} className="footer_logo" alt="..." />
          <span className="footer_copy mt-md-5">
            &copy; 2022 | Developed by <a href="/sadee">Palette Interactive</a>
          </span>
          <div className="mt-md-5">
            <a href="https://www.facebook.com/pages/Marwa-Kabab-Restaurant/121545987925963" target="_blank" rel="noopener noreferrer" className="me-4"><i className="fa-brands text-danger fs-4 fa-facebook-f"></i></a>
            {/* <a href="" className="me-3"><i className="fa-brands text-danger fs-4 fa-instagram"></i></a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
