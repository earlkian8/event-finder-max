import React from 'react';
import ShareableLink from '../../components/EventDetails/ShareableLink';

const ShareSection = ({ url }) => {
  return (
    <div className="border-t border-gray-200 pt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-3">Share this event</h2>
      <ShareableLink url={url} />
    </div>
  );
};

export default ShareSection;
