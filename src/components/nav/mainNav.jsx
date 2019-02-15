/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import SecondaryNav from './SecondaryNav.jsx';
import TertiaryNav from './TertiaryNav.jsx';
import ListItems from './ListItems.jsx';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navLevel: 1,
      navCategory: null, // integer to match main nav items to categories
      navPages: null, //integer to match main nav items to categories

      // level 1 **************************
      navItems: [{
        id: 0,
        name: 'My Schedule & Biddings',
        navigate: true,
        icon: 'fas fa-calendar-alt',
      },
      {
        id: 1,
        name: 'Saftey',
        navigate: true,
        icon: 'fas fa-lock',
      },
      {
        id: 2,
        name: 'Training',
        navigate: false,
        icon: 'fas fa-dumbbell'
      },
      {
        id: 3,
        name: 'Administration',
        navigate: true,
        icon: 'fas fa-user-tie'
      },
      {
        id: 4,
        name: 'Catering & Brand',
        navigate: true,
        icon: 'fas fa-utensils'
      },
      {
        id: 5,
        name: 'Hotels',
        navigate: false,
        icon: 'fas fa-hotel'
      },
      {
        id: 6,
        name: 'My Base',
        navigate: false,
        icon: 'fas fa-home'
      },
      {
        id: 7,
        name: 'Recognition',
        navigate: false,
        icon: 'fas fa-brain'
      },
      {
        id: 8,
        name: 'My Leadership Team',
        navigate: false,
        icon: 'fas fa-users'
      },
      ],

      // Level 2 **************************
      categories: [
        {
          referenceId: 0,
          id: 0,
          name: 'My Schedule',
          navigate: false,
        },
        {
          referenceId: 0,
          id: 1,
          name: 'My Biddings',
          navigate: false,
        },
        {
          referenceId: 1,
          id: 2,
          name: 'Reporting',
          navigate: true,
        },
        {
          referenceId: 1,
          id: 3,
          name: 'Agriculture and Customs',
          navigate: true,
        },
        {
          referenceId: 1,
          id: 4,
          name: 'Known Crewmember',
          navigate: false,
        },
        {
          referenceId: 1,
          id: 5,
          name: 'Product Safety Data Search',
          navigate: false,
        },
        {
          referenceId: 3,
          id: 6,
          name: 'OJI and Leave',
          navigate: true,
        },
        {
          referenceId: 3,
          id: 7,
          name: 'Pay & Benefits',
          navigate: true,
        },
        {
          referenceId: 3,
          id: 8,
          name: 'Performance',
          navigate: false,
        },
        {
          referenceId: 3,
          id: 9,
          name: 'Inflight Resource Directory',
          navigate: false,
        },
        {
          referenceId: 3,
          id: 10,
          name: 'Mobile & Web',
          navigate: false,
        },
        {
          referenceId: 3,
          id: 11,
          name: 'AFA',
          navigate: false,
        },
      ],

      // Level 3 **************************
      pages: [
        {
          referenceId: 2,
          id: 3,
          name: '1-21 Injury Reporting',
        },
        {
          referenceId: 2,
          id: 4,
          name: 'ASAP Reporting',
        },
        {
          referenceId: 2,
          id: 5,
          name: 'General ASAP Information',
        },
        {
          referenceId: 2,
          id: 6,
          name: 'Flight Attendant Incident Report',
        },
        {
          referenceId: 7,
          id: 7,
          name: 'OJI',
        },
        {
          referenceId: 7,
          id: 8,
          name: 'Leave',
        },
        {
          referenceId: 8,
          id: 9,
          name: 'Pay',
        },
        {
          referenceId: 8,
          id: 10,
          name: 'Benefits',
        },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e, level, id = '', name = '', closeMenu = false) {

    e.preventDefault();
    if (level === 2) {
      this.setState({
        navLevel: level,
        navCategory: id,
      });
    }
    else if (level === 3) {
      this.setState({
        navLevel: level,
        navPages: id,
      });
    }
    if (closeMenu) {
      console.log("closeMenu", closeMenu);
      this.props.handleMenuOpenClose(closeMenu);
    }
    this.props.getBreadcrumb(level, name);
  }

  render() {
    const { navActive } = this.props;
    if (navActive) {
      return (
        <div style={{ height: window.innerHeight }} className="main_nav">
          <div>
            <ul>
              <ListItems navItems={this.state.navItems} handleClick={this.handleClick} level={2} />
            </ul>
            <SecondaryNav {...this.state} handleClick={this.handleClick} />
            <TertiaryNav {...this.state} handleClick={this.handleClick} />
          </div>
        </div>
      );
    }
    return null;
  }
}


export default MainNav;
