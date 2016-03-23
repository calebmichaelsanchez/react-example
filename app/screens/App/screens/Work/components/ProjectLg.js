import React, { Component, PropTypes, defaultProps } from 'react';
import { Link } from 'react-router';
import Icon from '../../../shared/icons/Icon';

class ProjectLg extends Component {
  render() {
    let { link, name, title, theme } = this.props;
    let linkTo = link ? link : `/making-it-awesome-with${name}`;
    return (
      <Link to={linkTo} className={`projects__item projects__item--${name} projects__item--lg`}>
        <div className={`projects__item-meta projects__item-meta--lg`}>
          <h3>{title}</h3>
          <span className="projects__item-btn">
            View Project
            <Icon icon="arrow" type="icon-btn" theme={theme} />
          </span>
        </div>
      </Link>
    );
  }
}

ProjectLg.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
}

export default ProjectLg;
