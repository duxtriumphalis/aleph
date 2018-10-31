import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { Category, Country, Role, Date, Collection } from 'src/components/common';

import './CollectionOverview.scss';

class CollectionOverview extends Component {
  render() {
    const { collection, hasHeader = false } = this.props;
    
    // If collection data it hasn't loaded yet don't attempt to draw anything
    if (!collection)
      return null;

    return (
      <div className='CollectionOverview'>
        {hasHeader && (
          <h4>
            <Collection.Link collection={collection} />
          </h4>
        )}
        <p>{collection.summary}</p>
        <ul className='info-sheet'>
          { !collection.casefile && (
            <li>
              <span className="key">
                <FormattedMessage id="collection.category" defaultMessage="Category"/>
              </span>
              <span className="value">
                <Category collection={collection} />
              </span>
            </li>
          )}
          { collection.creator && (
            <li>
              <span className="key">
                <FormattedMessage id="collection.creator" defaultMessage="Manager"/>
              </span>
              <span className="value">
                <Role.Label role={collection.creator} />
              </span>
            </li>
          )}
          { collection.countries && !!collection.countries.length && (
            <li>
              <span className="key">
                <FormattedMessage id="collection.countries" defaultMessage="Country"/>
              </span>
              <span className="value">
                <Country.List codes={collection.countries} />
              </span>
            </li>
          )}
          <li>
            <span className="key">
              <FormattedMessage id="collection.updated_at" defaultMessage="Last updated"/>
            </span>
            <span className="value">
              <Date value={collection.updated_at} />
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

CollectionOverview = connect(mapStateToProps)(CollectionOverview);

export default CollectionOverview;
