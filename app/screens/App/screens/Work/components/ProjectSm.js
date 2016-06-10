import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Icon from '../../../shared/icons/Icon';

class ProjectSm extends Component {
  render() {
    let { name, title, theme, direction } = this.props;
    return (
      <Link to={`/making-it-awesome-with/${name}`} className="projects__item projects__item--sm">
        {(() => {
          if (direction === 'left') {
            return <div className={`projects__item-image projects__item-image--${name}`}></div>;
          }
          return <div></div>;
        })()}
        <div className={`projects__item-meta projects__item-meta--sm projects__item-meta-indicator--${direction}`}>
          <div>
            <h3>{title}</h3>
            <span className="projects__item-btn">
              View Project
              <Icon icon="arrow" type="icon-btn" theme={theme} />
            </span>
          </div>
        </div>
        {(() => {
          if (direction === 'right') {
            return <div className={`projects__item-image projects__item-image--${name}`}></div>;
          }
          return <div></div>;
        })()}
      </Link>
    );
  }
}

ProjectSm.propTypes = {
  'direction': PropTypes.string.isRequired,
  'name': PropTypes.string.isRequired,
  'title': PropTypes.string.isRequired,
  'theme': PropTypes.string.isRequired
};

export default ProjectSm;
