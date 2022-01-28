import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { MenuItem } from '..';
import { selectDirectorySections } from '../../redux';
import './directory.styles.scss';

const DirectoryComponent = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export const Directory = connect(mapStateToProps)(DirectoryComponent);
