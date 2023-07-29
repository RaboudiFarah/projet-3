
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/310382320_823810152174368_925240760990109297_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=O7DZdeVqkcoAX9XvEd4&_nc_ht=scontent.ftun8-1.fna&oh=00_AfDyhbMapyHQLmBQwwGuer4WHEvG5oecsvUM_AtBEPzxzA&oe=64AC065A"
          alt="logo"
        />
        <p>
        My School is an educational institution designed to provide learning spaces and learning environments for the teaching of students under the direction of teachers. 
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">WELCOME TO MY SCHOOL</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
          Personal development
          </li>
          <li className="sidebarListItem">
            
          Pedagogical approach
           
          </li>
          <li className="sidebarListItem">
           
          Social activities
            
          </li>
          <li className="sidebarListItem">
            
          language learning
           
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
      </div>
    </div>
  </div>
);
}